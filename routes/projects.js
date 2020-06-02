const express = require("express");
const router = express.Router();
const db = require("../config/db");
const Project = require("../models/Project.model");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

// Get User list
router.get("/", (req, res) =>
  User.findAll()
    .then((users) =>
      res.render("users", {
        users,
      })
    )
    .catch((err) => console.log(err))
);


module.exports = router;
