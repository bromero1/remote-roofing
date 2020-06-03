const express = require("express");
const router = express.Router();
const db = require("../config/db");
const Project = require("../models/Project.model");
const Sequelize = require("sequelize");

// Get Project list
router.get("/", (req, res) =>
  Project.findAll()
    .then((projects) =>
      res.render("projects", {
        projects,
      })
    )
    .catch((err) => console.log(err))
);

module.exports = router;