const Sequelize = require('sequelize');
const db = require('../config/db');

const Task = db.define('task', {
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  surname: {
    type: Sequelize.STRING
  }
})

module.exports = Task;