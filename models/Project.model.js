const Sequelize = require('sequelize');
const db = require('../config/db');

const Project = db.define('project', {
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

module.exports = Project;