const express = require('express')
const router = express.Router()
const db = require('../config/db');
const User = require('../models/User.model');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

// Get User list
router.get('/API/user', (req, res) => 
  User.findAll()
    .then(users => res.render('users', {
        users
      }))
    .catch(err => console.log(err)));

module.exports = router;