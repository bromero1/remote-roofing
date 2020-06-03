const express = require("express");
const router = express.Router();
const db = require("../config/db");
const Task = require("../models/Task.model");
const Sequelize = require("sequelize");

// Get Task list
router.get("/", (req, res) =>
  Task.findAll()
    .then((tasks) => res.send(tasks))
    .catch((err) => console.log(err))
);

module.exports = router;