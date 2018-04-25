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
//delete group
exports.group_delete = (req, res, next)  => {
  return Group
  .find({
    where: {
      id: req.params.groupId
    }
  })
  .then( group => {
    if(!group){ return res.status(404).json({message:'group not found'}); }
    return group.destroy()
    .then(() => res. status(200).json({message: 'group deleted'}))
    .catch((err) => res.status(500).send(err));
  })
  .catch(err => res.status(400).send(err));
};
