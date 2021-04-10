'''
Prerequisites:
1. Add headers to the quotes_dataset.csv downloaded from the github link such
   that the first row looks like this:
   quote,author,tags,likes,badmatch
2. Create output file quotes_likes.csv file with the same headers but no other
   content
3. Update the TODO 1 to match your start/end positions
4. Update the TODO 2 with yoru path to quotes_likes.csv
5. Update the TODO 3 with your path to quotes_dataset.csv
6. pip install unidecode and bs4
To execute: caffeinate -s python3.7 scraper.py
'''
from bs4 import BeautifulSoup as bs
import csv
import requests
import re
import urllib.parse
import unidecode
import time

def parse_url(url):
    tries = 3
    for t in range(tries):
        page = requests.get(url)
        soup = bs(page.content, 'html.parser')
        span_s = soup.find_all('span', {'class': 'authorOrTitle'})
        a_s = soup.find_all('a', {'class', 'smallText'})
        if span_s and a_s and len(span_s)>0 and len(a_s)>0: return span_s, a_s
    return span_s, a_s

def find_match(quote, i, sentences=2):
    fs = '.'.join(bytes(quote['quote'], 'cp1252').decode('utf-8', 'ignore').split('.')[:sentences])
    fs = urllib.parse.quote(fs)
    url="https://www.goodreads.com/quotes/search?utf8=✓&q={}".format(fs)
    span_s, a_s = parse_url(url)
    if not(span_s and a_s and len(span_s)>0 and len(a_s)>0):
        if sentences==1: print('{}: no matches for {}'.format(i, url))
        return None
    author = span_s[0].getText().strip()
    a = a_s[0].getText()
    if not unidecode.unidecode(author).lower() in unidecode.unidecode(quote['author']).lower():
        if sentences==1: print('{}: {}, {} instead of {} - wrong author'.format(i, fs, author.strip(), quote['author']))
        return None
    likes = int(re.findall(r'(\d+) likes', a)[0])
    return likes
    
def process(reader):
    ## TODO 1: update start and end 
    start = 0
    end = 100000
    for i, quote in enumerate(reader):
        if i<start: continue
        if i==end: break
        try:
            # TODO 2: update filepath if required
            with open('quotes_likes.csv', 'a') as f:
                writer = csv.writer(f)
                likes = find_match(quote, i)
                if not likes: likes = find_match(quote, i, sentences=1)
                if not likes:
                    writer.writerow([quote.get('quote',''), quote.get('author',''), quote.get('tags',''), '', 'True\n'])
                else:
                    writer.writerow([quote.get('quote',''), quote.get('author',''), quote.get('tags',''), str(likes), '\n'])
        except:
            pass

if __name__ == '__main__':
    ## TODO 3: update filepath
    with open('/Users/vrushalisamant/Downloads/quotes_dataset.csv','r') as f:
        reader = csv.DictReader(f)
        process(reader)
