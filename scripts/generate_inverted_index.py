import pandas as pd
import itertools
from collections import defaultdict
import pickle
import os

dfs = []
for fname in os.listdir('../quotes_likes/'):
    fpath = os.path.join('../quotes_likes', fname)
    if not os.path.isfile(fpath) or not fname.startswith('quotes_'): continue
    dfs.append(pd.read_csv(fpath, header=0))

print(dfs)
df = pd.concat(dfs)
df['tags'] = df['tags'].str.split(',')
df = df[df['tags'].notnull()]

tags = defaultdict(list)

for index, row in df.iterrows():
    if not row['tags']: continue
    for tag in row['tags']:
        tags[tag].append(index)

with open('../quotes_likes/inverted_idx_tags.pickle', 'wb') as f:
    pickle.dump(tags, f, protocol=pickle.HIGHEST_PROTOCOL)
