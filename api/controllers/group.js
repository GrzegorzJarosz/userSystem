const Sequelize = require('sequelize');
const sequelize = require('../models/sequelize');
const User = require('../models/user');
const Group = require('../models/group');

/*----------------------------------------------------------------------------*/
//get all groups
exports.group_get_all = (req, res, next)  => {
  return Group.findAll({
    include: [{
      model: User,
      as: 'users',
      attributes: ['name'],
      through:{
        attributes: []
      }
    }],
    attributes:['name']
  }).then(group => res.status(200).send(group))
  .catch(err => res.status(500).send(err));
};

/*----------------------------------------------------------------------------*/
//create new group
exports.group_create = (req, res, next)  => {
  Group.create({
    name: req.body.name
  })
  .then(group => {
      console.log('group created');
      res.status(200).send(group);
    })
  .catch(er => {
    console.log(er);
    res.status(500).json({message:er});
  });
};

/*----------------------------------------------------------------------------*/
exports.group_get_by_id = ()  => {};

/*----------------------------------------------------------------------------*/
exports.group_update = ()  => {};

/*----------------------------------------------------------------------------*/
exports.group_delete = ()  => {};
