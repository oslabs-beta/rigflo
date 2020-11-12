const axios = require('axios');

const repoController = {};

repoController.createNewRepo = async (req, res, next) => {
  const { token } = req.query;
  const { elements } = req.body;

  console.log({ token });

  const body = JSON.stringify({ name: `rigflo - ${Date.now()}` });

  try {
    const config = {
      url: 'user/repos',
      method: 'post',
      baseURL: 'https://api.github.com/',
      headers: {
        Authorization: `token ${token}`,
        'Content-Type': 'application/json',
      },
      data: body,
      responseType: 'json',
    };

    const { data } = await axios(config)
      .then((response) => {
        console.log(response.data);
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.config);
        return response;
      })
      .catch((error) => console.log({ error }));

    console.log({ data });
    res.locals.data = data;
    console.log('after setting locals');
    return next();
  } catch (e) {
    return next({
      log: `Error caught in repoController.createNewRepo. \n Error Message: ${
        e.errmsg || e
      }`,
      message: { err: e.errmsg || e },
    });
  }
};

module.exports = repoController;
