const Sequelize = require("sequelize");
const db = require("../config/db");

const Project = db.define(
  "project",
  {
    name: {
      type: Sequelize.STRING,
    },
    body: {
      type: Sequelize.TEXT,
    },
    status: {
      type: Sequelize.STRING,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = Project;
