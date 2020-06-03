const express = require("express");
const router = express.Router();
const db = require("../config/db");
const User = require("../models/User.model");
const Sequelize = require("sequelize");
const bodyParser = require("body-parser");

// Get User list
router.get("/", (req, res) =>
  User.findAll()
    .then((users) => res.send(users))
    .catch((err) => console.log(err))
);

router.post("/", bodyParser.json(), (req, res) => {
  var user = new User();
  user.name = req.query.name;
  user.surname = req.query.surname;
  user.email = req.query.email;
  console.log(user);
  user
    .save()
    .then((user) => {
      res.json("User added successfully");
    })
    .catch((err) => {
      res.status(400).send("unable to save to database");
    });
});

module.exports = router;

// async (req, res) => {
//   const {
//     email, first_name, last_name, password,
//   } = req.body;
