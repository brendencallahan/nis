const express = require('express');
const env = require('dotenv');
const router = express.Router();

router.get('/', (req, res) => {
  fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}`)
    .then((response) => response.json())
    .then((data) =>  {
      console.log(data)
      res.json(data);
    })
});

module.exports = router;
