import pickle
import string
import pandas as pd
import numpy as np
import os
import sys
from nltk.tokenize import TreebankWordTokenizer
from collections import Counter

def load_quotes():
    '''
    Loads quotes data (4 columns: quote, author, tags, likes)
    '''
    dfs = []
    for fname in os.listdir('./quotes_likes/'):
        fpath = os.path.join('./quotes_likes', fname)
        if not os.path.isfile(fpath) or not fname.startswith('quotes_'): continue
        dfs.append(pd.read_csv(fpath, header=0, encoding='utf-8'))
    df = pd.concat(dfs)
    df = df[['quote', 'author', 'tags', 'likes']]
    return df

def load_tags_idx():
    '''
    Loads static inverted index
    '''
    with open('./quotes_likes/inverted_idx_tags.pickle', 'rb') as handle:
        inv_idx_lookup = pickle.load(handle) 
    return inv_idx_lookup

def load_quotes_idx():
    '''
    Loads static inverted index
    '''
    with open('./quotes_likes/inverted_idx_tf.pickle', 'rb') as handle:
        inv_idx_lookup = pickle.load(handle) 
    return inv_idx_lookup

def merge_postings(inv_idx1, inv_idx2):
    '''
    Merges two inverted indexes together using a boolean OR search
    '''
    i1 = 0
    i2 = 0
    result = []
    while not i1==len(inv_idx1) and not i2==len(inv_idx2):
        if inv_idx1[i1] == inv_idx2[i2]:
            result.append(inv_idx1[i1])
            i1 += 1
            i2 += 1
        elif inv_idx1[i1] < inv_idx2[i2]:
            result.append(inv_idx1[i1])
            i1 += 1
        else:
            result.append(inv_idx2[i2])
            i2 += 1
    if i1 != len(inv_idx1): result.extend(inv_idx1[i1:])
    if i2 != len(inv_idx2): result.extend(inv_idx2[i2:])
    return result
         
def merge_postings_n(tags):
    '''
    Merges inverted indexes of n-many tags together
    '''
    inv_idx_lookup = load_tags_idx()
    tags_ordered = sorted([(len(inv_idx_lookup[tag]), tag) for tag in tags], key=lambda x: x[0])
    if len(tags)==1: return inv_idx_lookup[tag]
    for i in range(len(tags)-1):
        merged = merge_postings(inv_idx_lookup[tags_ordered[i][1]], inv_idx_lookup[tags_ordered[i+1][1]])
    return merged

def get_category_matches(tags):
    '''
    Retrieves indexes of relevant documents given list of tags.
    Selects the quote, author, tags, and likes columns
    '''
    doc_idxs = merge_postings_n(tags)
    df = load_quotes()
    df = df.iloc[doc_idxs][['quote', 'author', 'tags', 'likes']]
    likes_no_nan = df[df['likes'].notnull()]
    likes_no_nan = likes_no_nan.sort_values(['likes'], ascending=[False])
    return likes_no_nan.head(10).to_json(orient = "records")

def get_cos_sim(query):
    '''Return 10 most highly ranked quotes for search query in json'''
    query = query.translate(string.punctuation)
    treebank_tokenizer = TreebankWordTokenizer()
    query = treebank_tokenizer.tokenize(query.lower())
    inv_idx = load_quotes_idx()
    df = load_quotes()

    # generate idf
    idf = {}
    min_df=15
    max_df_ratio=0.1
    n_docs = df.shape[0]
    for term, doc_counts in inv_idx.items():
        if len(inv_idx[term]) < min_df: continue
        if len(inv_idx[term])/n_docs > max_df_ratio: continue
        idf_score = np.log2(n_docs/(1+len(inv_idx[term])))
        idf[term] = idf_score

    norms = np.zeros(n_docs)
    for i, (term, posting) in enumerate(inv_idx.items()):
        for d, count in posting:
            norms[d]+=(count*idf.get(term, 0))**2
    doc_norms = np.sqrt(norms).tolist()

    qcount = Counter(query)
    djs = {}
    qnorm = 0
    for qj, count in qcount.items():
        if qj not in inv_idx:
            continue
        qnorm += (count*idf.get(qj, 0))**2
        for doc_idx, doc_count in inv_idx[qj]:
            tf_idf_q = count*idf.get(qj, 0)
            tf_idf_d = doc_count*idf.get(qj,0)
            if not doc_idx in djs:
                djs[doc_idx] = tf_idf_q*tf_idf_d
            else:
                djs[doc_idx] += tf_idf_q*tf_idf_d
    qnorm = np.sqrt(qnorm)
    results = []
    for doc_idx, num in djs.items():
        results.append((num/(qnorm*doc_norms[doc_idx]), doc_idx))
    results = sorted(results, key=lambda tup: (-tup[0], tup[1]))

    # package results
    results = results[:10]
    subset = df.iloc[list(map(lambda tup: tup[1], results))]
    subset.reset_index(inplace=True)
    subset['similarity'] = list(map(lambda tup: tup[0], results))
    return subset.to_json(orient = "records")

def get_categories():
    '''Return categories for drop-down menu'''
    return load_tags_idx().keys()

if __name__ == '__main__':
    print(get_category_matches(['love', 'friendship']))
    print(get_cos_sim("I wish school was easier"))
