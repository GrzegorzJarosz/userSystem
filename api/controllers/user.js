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
    attributes:['id', 'name', 'password', 'firstName', 'lastName', 'birthDate']
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
  const groups = (req.body.groups).map(el => el.name);
  User.create(newUser)
  .then((user) => {

    Group.findAll({where:{name:groups}})
    .then((groups)=>{
      user.setGroups(groups).then(()=>{res.status(200).send(newUser)}).catch(er => {
        console.log(er);
        res.status(500).json({message:er});
      });
    })
    .catch((er)=>res.status(404).send(er));
      //console.log('user created');
    })
  .catch(er => {
    console.log(er);
    res.status(500).json({message:er});
  });
};

/*----------------------------------------------------------------------------*/
//get user by id
exports.user_get_by_id = (req, res, next)  => {
  return User.find({
    include: [{
      model: Group,
      as: 'groups',
      attributes: ['name'],
      through:{
        attributes: []
      }
    }],
    attributes:['id', 'name', 'password', 'firstName', 'lastName', 'birthDate'],
    where:{id: req.params.userId}
  }).then(user => res.status(200).send(user))
  .catch(err => res.status(500).send(err));
};

/*----------------------------------------------------------------------------*/
//update user
exports.user_update = (req, res, next)  => {

  const groups = (req.body.groups).map(el => el.name);
  return User.find({
    where: {
    id: req.params.userId
  }})
   .then((user)=>{
     if(!user){ return res.status(404).json({message:'user not found'}); }

     return user.update({
       name: req.body.name || user.name,
       password: req.body.password || user.password,
       firstName: req.body.firstName || user.firstName,
       lastName: req.body.lastName || user.lastName,
       birthDate: req.body.birthDate || user.birthDate
     })
     .then((updatedUser) => {
       Group.findAll({where:{name:groups}})
       .then((groups)=>{
         user.setGroups(groups).then((a)=>{res.status(200).send(a)})
         .catch(er => {
           console.log(er);
           res.status(500).json({message:er});
         });
     })
     .catch((err) => res.status(500).send(err));
     })
     .catch((er)=>res.status(404).send(er));
   }).catch((er)=>{
     res.status(500).send(er)
 });
};

/*----------------------------------------------------------------------------*/
//delete user
exports.user_delete = (req, res, next)  => {
  return User
  .find({
    where: {
      id: req.params.userId
    }
  })
  .then( user => {
    if(!user){ return res.status(404).json({message:'user not found'}); }
    return user.destroy()
    .then(() => res. status(200).json({message: 'user deleted'}))
    .catch((err) => res.status(500).send(err));
  })
  .catch(err => res.status(400).send(err));
};
