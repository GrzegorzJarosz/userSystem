const Sequelize = require('sequelize');
const sequelize = require('./sequelize');

const Group = sequelize.define('group', {
  name: {
    type: Sequelize.STRING
  }
});

module.exports = Group;
