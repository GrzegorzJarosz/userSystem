const Sequelize = require('sequelize');
const sequelize = require('../models/sequelize');
const User = require('../models/user');
const Group = require('../models/group');
const Subscription = require('../models/subscription');

///

/*----------------------------------------------------------------------------*/
//get all users
exports.user_get_all = (req, res, next)  => {
  return User.findAll({
    include: [{
      model: Group,
      as: 'groups',
      attributes: ['name'],
      through:{
        attributes: []
      }
    }],
    attributes:['name', 'password', 'firstName', 'lastName', 'birthDate']
  }).then(user => res.status(200).send(user))
  .catch(err => res.status(500).send(err));
};

/*----------------------------------------------------------------------------*/
//create new user
exports.user_create = (req, res, next)  => {
  const newUser = {
      name: req.body.name,
      password: req.body.password,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      birthDate:  req.body.birthDate
  };
  User.create(newUser)
  .then(user => {
      console.log('user created');
      res.status(200).send(newUser);
    })
  .catch(er => {
    console.log(er);
    res.status(500).json({message:er});
  });

};


/*----------------------------------------------------------------------------*/
//
exports.user_get_by_id = ()  => {};

/*----------------------------------------------------------------------------*/
//update user
exports.user_update = ()  => {};


/*----------------------------------------------------------------------------*/
//delete user
exports.user_delete = ()  => {};
