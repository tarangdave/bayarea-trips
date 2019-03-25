from pymongo import MongoClient
from pprint import pprint
import os
import json

ROOT = os.path.dirname(__file__)
TRIP_FOLDER = os.path.join(ROOT, 'trips')
TRIP_DIR = os.path.abspath(TRIP_FOLDER)
files = os.listdir(TRIP_DIR)

client = MongoClient("mongodb://localhost:27017/comma_trips")

db = client.baytrips

for f in files:
	file_data = json.loads(open(os.path.abspath(os.path.join(TRIP_DIR, f))).read())
	obj = dict()

	obj['type'] = 'file'
	obj['trip'] = f.split(".")[0]
	obj['data'] = file_data

	db.trips_data.insert_one(obj)

# cursor = db.trips_data.find()
print("Successfully indexed data")
client.close()
