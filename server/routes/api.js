const express = require('express');
const cors = require('cors');

const router = express.Router();

const userController = require('../controllers/userController');
const projectController = require('../controllers/projectController');
const repoController = require('../controllers/repoController');

// router.use(cors());

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

router.post('/repos', cors(), repoController.createNewRepo, (req, res) => {
  console.log('final callback');
  const { id, name, html_url } = res.locals.data;
  console.log({ id });
  console.log({ name });
  console.log({ html_url });
  const response = {
    id,
    name,
    html_url,
  };
  res.status(201).json(response);
});

module.exports = router;
