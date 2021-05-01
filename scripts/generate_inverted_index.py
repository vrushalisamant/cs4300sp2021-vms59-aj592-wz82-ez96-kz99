import pandas as pd
from nltk.tokenize import TreebankWordTokenizer
import itertools
from collections import defaultdict
from collections import Counter
import pickle
import os
import string


df = pd.read_csv('quotes_likes/quotes_likes_0-100K.csv',header=0)
df = df.head(10000)
# inverted index for tags
df = df[['quote', 'author', 'tags', 'likes']]
df['tags'] = df['tags'].str.split(',')
df['tags'] = df['tags'].apply(lambda l: list(map(lambda element: element.strip(), l)) if type(l)==list else l)
df = df[df['tags'].notnull()]

tags = defaultdict(list)

for index, row in df.iterrows():
    if not row['tags']: continue
    for tag in row['tags']:
        tags[tag].append(index)

with open('quotes_likes/inverted_idx_tags.pickle', 'wb') as f:
    pickle.dump(tags, f, protocol=pickle.HIGHEST_PROTOCOL)

# inverted index for terms in quotes
tokenizer = TreebankWordTokenizer()
inv_idx = {}
doc_id = 0
df['quote'] = df['quote'].apply(str.lower)
df['quote'] = df['quote'].str.replace('[{}]'.format(string.punctuation), '')
df['quote'] = df['quote'].apply(tokenizer.tokenize)
for index, row in df.iterrows():
    counts = Counter(row['quote'])
    for tok, count in counts.items():
        if tok in inv_idx: inv_idx[tok].append((doc_id, count))
        else: inv_idx[tok]=[(doc_id, count)]
    doc_id += 1

with open('quotes_likes/inverted_idx_tf.pickle', 'wb') as f:
    pickle.dump(inv_idx, f, protocol=pickle.HIGHEST_PROTOCOL)
