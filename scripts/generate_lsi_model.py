from gensim import models, similarities, corpora
import nltk
from nltk.corpus import stopwords 
import os
import ssl
import pandas as pd

try:
    _create_unverified_https_context = ssl._create_unverified_context
except AttributeError:
    pass
else:
    ssl._create_default_https_context = _create_unverified_https_context

nltk.download('stopwords')
stop_words = nltk.corpus.stopwords.words("english")
#stop_words = set(stopwords.words('english'))

df = pd.read_csv('quotes_likes/quotes_likes_0-100K.csv', header=0)
df = df.head(10000)

# inverted index for tags
df = df[['quote', 'author', 'tags', 'likes']]
df['tags'] = df['tags'].str.split(',')
df['tags'] = df['tags'].apply(lambda l: list(map(lambda element: element.strip(), l)    ) if type(l)==list else l)
df = df[df['tags'].notnull()]

documents = df['quote'].tolist()
df = df[df['tags'].notnull()]
df['tags'] = df['tags'].str.split(',')
df['tags'] = df['tags'].apply(lambda l: list(map(lambda element: element.strip(), l)) if type(l)==list else l)
texts = [
    [word for word in document.lower().split() if word not in stop_words]
    for document in documents
]

dictionary = corpora.Dictionary(texts)
dictionary.save('quotes_likes/quotes.dict')

corpus = [dictionary.doc2bow(text) for text in texts]
lsi = models.LsiModel(corpus, id2word=dictionary, num_topics=500)
lsi.save('quotes_likes/quotes.model')

index = similarities.MatrixSimilarity(lsi[corpus])
index.save("quotes_likes/quotes.index")
