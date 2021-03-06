# bayarea-trips
A performant web app containing an interactive map visualizing the distribution of speeds among bayarea car trips.

## Setup
+ ```git clone https://github.com/tarangdave/bayarea-trips.git```
+ ```cd bayarea-trips```
+ ```npm install```
+ ```pip install -r requirements.txt```
+ Install Mongodb

## Additional Scripting
+ Starting the mongo service if its not running, run ```service mongod start```
+ run ```python extract_trips.py``` to extract trips.zip
+ now, run ```python mongo.py``` to index the trips data into mongodb server

## Running the project
+ ```npm run start```
+ Visit ```http://localhost:3000``` if the script doesn't automatically redirects.

## How it looks
![Map Render](https://github.com/tarangdave/bayarea-trips/blob/master/images/globMap.png)
![Map Render](https://github.com/tarangdave/bayarea-trips/blob/master/images/tooltipMap.png)
![Map Render](https://github.com/tarangdave/bayarea-trips/blob/master/images/zoomMap.png)
