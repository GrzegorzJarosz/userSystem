const Sequelize = require('sequelize');
const sequelize = new Sequelize('usersystem', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
