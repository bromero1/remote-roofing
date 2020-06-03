const Sequelize = require("sequelize");
const db = require("../config/db");

const User = db.define(
  "User",
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      primaryKey: true,
      validate: {
        isEmail: {
          msg: "Invalid Email",
        },
      },
    },
    surname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = User;

db.define();
