const Sequelize = require("sequelize");
const db = require("../config/db");

const Task = db.define(
  "task",
  {
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
    }
    
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = Task;
