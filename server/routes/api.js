const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');

router.get('/', (req, res) => {
  res.send('hello');
  // res.status(201).json({ message: 'Success' });
});

router.get(
  '/login/callback',
  userController.authenticateUser,
  userController.requestToken,
  userController.getUserProfile,
  (req, res) => {
    res.redirect(
      `http://localhost:8080/?access_token=${res.locals.access_token}`,
    );
  },
);

module.exports = router;
