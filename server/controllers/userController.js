const axios = require('axios');

// const User = require('../models/userModel');

const userController = {};

// Get the auth code from Github
userController.authenticateUser = async (req, res, next) => {
  const randomString = '9323bb9ce6934469b58303863f8c0d54';

  try {
    const { code, state } = req.query;

    // VERIFY REQUEST FOR OAUTH SECURITY.
    if (!state === randomString) {
      return res.status(401).send('Unauthorized request');
    }

    // SAVE TEMPORARY AUTH CODE
    res.locals.authCode = code;

    return next();
  } catch (e) {
    return next({
      log: `Error caught in userController.authenticateUser. \n Error Message: ${
        e.errmsg || e
      }`,
      message: { err: e.errmsg || e },
    });
  }
};

// Get access token from Github
userController.requestToken = async (req, res, next) => {
  const clientID = process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET;
  const { authCode } = res.locals;

  try {
    axios({
      method: 'post',
      url: `https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${authCode}&scope=repos`,
      headers: {
        accept: 'application/json',
      },
    }).then((response) => {
      res.locals.access_token = response.data.access_token;
      return next();
    });
  } catch (e) {
    return next({
      log: `Error caught in userController.requestToken. \n Error Message: ${
        e.errmsg || e
      }`,
      message: { err: e.errmsg || e },
    });
  }
};

// Get the user profile from Github
userController.getUserProfile = async (req, res, next) => {
  try {
    const config = {
      method: 'get',
      url: 'https://api.github.com/user',
      headers: {
        Accept: 'application/vnd.github.v3+json',
        Authorization: `token ${res.locals.access_token}`,
      },
    };

    const { data } = await axios(config);

    res.locals.user = data;

    return next();
  } catch (e) {
    return next({
      log: `Error caught in userController.getUserProfile. \n Error Message: ${
        e.errmsg || e
      }`,
      message: { err: e.errmsg || e },
    });
  }
};

module.exports = userController;
