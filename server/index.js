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
  max: 30
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
app.use('/api/results', cache('1 minutes'), require('./routes/results'));

// Set cors
app.use(
  cors({
    origin: '*'
  })
);

// Define responses
app.get('/api/home', cache('15 minutes'), (req, res) => {
  axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}`)
    .then((response) => response.data)
    .then((data) => {
      console.log('Home page NASA API called');
      res.json(data);
    });
});

// Start server
app.listen(PORT);
