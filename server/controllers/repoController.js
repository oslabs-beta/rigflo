const axios = require('axios');

const repoController = {};

repoController.createNewRepo = async (req, res, next) => {
  const { token } = req.body;

  console.log(token);

  const body = JSON.stringify({ name: 'hardcodedfornowfdafdfa' });

  try {
    const config = {
      method: 'post',
      url: 'https://api.github.com/user/repos',
      headers: {
        Authorization: 'token a07962e8bb1db8abd4736da8e9a3486fac6b9e1e',
        'Content-Type': 'application/json',
        Cookie:
          '_octo=GH1.1.540748162.1605028314; tz=America%2FChicago; logged_in=yes; dotcom_user=jamesscaggs',
      },
      data: body,
    };

    const { data, error } = await axios(config);
    if (error) console.log(error.message);

    console.log({ data });
    res.locals.data = data;
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
