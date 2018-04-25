const Sequelize = require('sequelize');
const sequelize = require('./sequelize');

const User = sequelize.define('user', {
  name: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  },
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  },
  birthDate: {
    type: Sequelize.DATE
  }
});

module.exports = User;
