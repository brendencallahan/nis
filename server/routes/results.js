const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    {
      username: 'Testone',
      age: 23
    },
    {
      username: 'Testwo',
      age: 35
    }
  ])
});

module.exports = router;