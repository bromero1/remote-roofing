const Sequelize = require("sequelize");
const db = require("../config/db");

const Task = db.define(
  "Task",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.TEXT,
    },
    score: {
      type: Sequelize.INTEGER,
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

module.exports = Task;
