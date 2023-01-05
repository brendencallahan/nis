const rateLimit = require('express-rate-limit');
const express = require('express');
const path = require('path');
const cors = require('cors');
const apiCache = require('apicache');
const axios = require('axios');
require('dotenv').config();

// Set variables
const PORT = process.env.PORT || 3001;
const apiLimiter = rateLimit({
  windowMs: 1000, // One second
  max: 10
});

// Initialize cache
let cache = apiCache.middleware;

// Initialize express
const app = express();

// Rate limiter
app.use('/api', apiLimiter);
// may need trust proxy in prod for load balancers

// Set static files
app.use(express.static(path.join(__dirname + '/public')));

// Set routes
app.use('/api/results', cache('15 minutes'), require('./routes/results'));

// Set cors
app.use(cors());

// Define responses
app.get('*', function(req, res) {
  res.sendFile('index.html', {root: path.join(__dirname, '/public/')})
})

// Say hello
app.get('/api', cache('15 minutes'), (req, res) => {
  res.send('<h1>Welcome to NASA Image Search<h1>');
});

// Image of the Day
app.get('/api/home', cache('60 minutes'), (req, res) => {
  const getAposData = async () => {
    const aposRes = await axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}`
    );
    const aposData = await aposRes.data;
    console.log('Home page NASA API called');
    res.json(aposData);
  };
  getAposData();
});

// Start server
app.listen(PORT);
