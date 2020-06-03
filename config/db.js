const Sequelize = require('sequelize');

// Password in file for simplicity 
module.exports =  new Sequelize('remoteroofing', 'bryan', 'remoteroofing', {
  host: 'remoteroofing-test.c8vl47uqm7vj.us-east-2.rds.amazonaws.com',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});

