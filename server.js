'use strict'

const express = require('express');
const cors = require('cors');

require('dotenv').config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());

app.get('/location', (request, response) => {
/*
"formatted_query": "Lynnwood, WA, USA",
"latitude": 47.8209301,
"longitude": -122.3151314,
"search_query": "Seattle,WA"
*/
  const locationData = searchLatiLong(request.query.data);
  response.send(locationData);
});

function searchLatiLong(query){
  const geoData = require('./data/geoData');
  const location = new Location(geoData.results[0]);
  location.search_query = query;
  return location;
}

function Location(data){
  this.formatted_query = data.formatted_address;
  this.latitude = data.geometry.location.lat;
  this.longitude = data.geometry.location.lng;
}

app.listen(PORT, () => console.log(`App is up on ${PORT}`) );
