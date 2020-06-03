const express = require("express");
const router = express.Router();
const db = require("../config/db");
const Task = require("../models/Task.model");
const Sequelize = require("sequelize");

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
