const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('hello');
  // res.status(201).json({ message: 'Success' });
});

module.exports = router;
