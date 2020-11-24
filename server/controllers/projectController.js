const Project = require('../models/projectModel');

const projectController = {};

projectController.saveProject = async (req, res, next) => {
  try {
    console.log('BODY:', req.body);
    console.log(req.headers);
    const { project } = req.body;

    console.log({ project });

    // Create a new project
    const createdProject = await Project.create({ project });

    console.log({ createdProject });

    res.locals.project = createdProject._id;
    return next();
  } catch (e) {
    return next({
      log: `Error caught in projectController.saveProject. \n Error Message: ${
        e.errmsg || e
      }`,
      message: { err: e.errmsg || e },
    });
  }
};

module.exports = projectController;
