const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');
const projectController = require('../controllers/projectController');

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
    const { login, avatar_url } = res.locals.user;
    res.redirect(
      `http://localhost:8080/login/callback?access_token=${res.locals.access_token}&login=${login}&avatar_url=${avatar_url}`,
    );
  },
);

router.post('/projects', projectController.saveProject, (req, res) => {
  console.log('sending back status');
  return res.send('yep');
});

module.exports = router;
