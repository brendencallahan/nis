const rateLimit = require('express-rate-limit');
const express = require('express');
const path = require('path');
const cors = require('cors');
const apiCache = require('apicache');

// Set variables
const PORT = process.env.PORT || 3001;
const apiLimiter = rateLimit({
  windowMs: 1000000,
  max: 50
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
app.use('/api/users', cache('1 minutes'), require('./routes/users'));
app.use('/api/home', cache('10 minutes'), require('./routes/home'));

// Set cors
app.use(
  cors({
    origin: '*'
  })
);

// Define responses
app.get('/', cache('1 minutes'), (req, res) => {
  res.send('hello world from express');
});

// Start server
app.listen(PORT);
