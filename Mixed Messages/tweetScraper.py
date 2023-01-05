import snscrape.modules.twitter as sntwitter
import argparse
import json
import collections

parser=argparse.ArgumentParser()
parser.add_argument('--twitter_user',required=True)
parser.add_argument('--max_results',required=False,default=200)
args=parser.parse_args()

twitter_user=args.twitter_user
max_result=(int)(args.max_results)
tweetProperty=collections.defaultdict(lambda:[])
obj=sntwitter.TwitterSearchScraper(f'from:{twitter_user}')

for i,tweet in enumerate(obj.get_items()):
    if i>max_result:
        break
    tweetProperty[tweet.id]=tweet.content
json_obj=json.dumps(tweetProperty)
with open("myTweets.json", "w") as outfile:
    outfile.write(json_obj)

#print(tweetProperty.items())