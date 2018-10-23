'use strict'

const express = require('express');
const cors = require('cors');

require('dotenv').config();

const PORT = process.env.PORT;

const app = express();

app.use(cors());

app.get('/location', (request, response) => {
/*
"formatted_query": "Lynnwood, WA, USA",
"latitude": 47.8209301,
"longitude": -122.3151314,
"search_query": "Seattle,WA"
*/
});

app.listen(PORT, () => console.log(`App is up on ${PORT}`) );
