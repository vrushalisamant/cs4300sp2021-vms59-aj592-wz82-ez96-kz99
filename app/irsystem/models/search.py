import pickle
import pandas as pd
import numpy as np
import os
import sys

sys.setdefaultencoding('utf-8')

def load_quotes():
    '''
    Loads quotes data (4 columns: quote, author, tags, likes)
    '''
    dfs = []
    for fname in os.listdir('../../../quotes_likes/'):
        fpath = os.path.join('../../../quotes_likes', fname)
        if not os.path.isfile(fpath) or not fname.startswith('quotes_'): continue
        dfs.append(pd.read_csv(fpath, header=0, encoding='utf-8'))
    df = pd.concat(dfs)
    return df

def load_quotes_idx():
    '''
    Loads static inverted index
    '''
    with open('../../../quotes_likes/inverted_idx_tags.pickle', 'rb') as handle:
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
    inv_idx_lookup = load_quotes_idx()
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
    return likes_no_nan.head(10).to_json()

if __name__ == '__main__':
    print(get_category_matches(['love', 'friendship']))
