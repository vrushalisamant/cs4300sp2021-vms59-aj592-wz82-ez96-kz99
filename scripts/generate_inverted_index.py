import pandas as pd
import itertools
from collections import defaultdict
import pickle

df = pd.read_csv('quotes_excerpt.csv', header=0)
df['tags'] = df['tags'].str.split(',')
df = df[df['tags'].notnull()]

tags = defaultdict(list)

for index, row in df.iterrows():
    if not row['tags']: continue
    try:
        for tag in row['tags']:
            tags[tag].append(index)
    except Exception as e:
        print(row)
        raise
with open('inverted_idx_tags.pickle', 'wb') as f:
    pickle.dump(tags, f, protocol=pickle.HIGHEST_PROTOCOL)
