const express = require("express");
const projectController = require("../controllers/projectController")
const projectRouter = express.Router();

projectRouter.route("/allProjects").get(projectController.getAllProjects);

module.exports = projectRouter;