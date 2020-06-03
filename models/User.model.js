const Sequelize = require("sequelize");
const db = require("../config/db");

const User = db.define(
  "User",
  {
    name: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    surname: {
      type: Sequelize.STRING,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = User;

db.define();
