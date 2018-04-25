const Sequelize = require('sequelize');
const sequelize = require('./sequelize');
const User = require('./user');
const Group = require('./group');

const Subscription = sequelize.define('subscription', {});

User.belongsToMany(Group, {through: Subscription});
Group.belongsToMany(User, {through: Subscription});

module.exports = Subscription;
