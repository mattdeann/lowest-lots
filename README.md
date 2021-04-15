# Lowest Rated Lots Search

Searches for lowest rated parking lots by city. Created using React and the Yelp API.

![Search Feature](https://user-images.githubusercontent.com/69775071/114886007-6b0b8500-9dc4-11eb-83fa-df3443533d5e.png)

### Local Setup

Prerequisites:

Node.js

A browser (Chrome, Firefox, etc)

#### Open your terminal


#### Clone the repository in the desired folder

HTTPS

`git clone https://github.com/mattdeann/lowest-lots.git`

SSH

`git clone git@github.com:mattdeann/lowest-lots.git`


#### Move into the repo

`cd lowest-lots`


#### Install dependencies

`npm i`


#### Start the app

`npm start`


#### Visit the server in a browser at

`http://localhost:3000/`

*Note: The Yelp API can cause some difficulties. Below are some troubleshooting tips*


#### Check that cors-anywhere is active

Visit https://cors-anywhere.herokuapp.com/ to check if a trial is running (as of February 2021 they require activating a trial for use to prevent overuse of heroku)


#### Check that the API key is valid

Visit https://www.yelp.com/developers/v3/manage_app and either:

Create an app and paste the generated API key into `util.js` under the request header in the format of

`"Bearer <YOUR-API-KEY>"`

or

Copy your already generated Yelp API key and paste that into `util.js` under the request header in the format of

`"Bearer <YOUR-API-KEY>"`
