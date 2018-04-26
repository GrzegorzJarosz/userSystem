
/*----------------------------------------------------------------------------*/
//
//
//
//
//
//
//
/*----------------------------------------------------------------------------*/
//test
exports.user_test = (req, res, next)  => {
   User.find({where:{id:4}})
  .then((user)=>{
    Group.find({where:{id:3}}).then((group)=>{

      user.addGroup(group)
      .then(()=>res.status(200).send('ok!'))
      .catch((er)=>{res.status(500).send(er)});

    })
    .catch(er=>console.log(er))
  }).catch((er)=>{
    res.status(500).send(er)
  });
};

/*----------------------------------------------------------------------------*/
//test2
exports.user_test2 = (req, res, next)  => {
  const {gt} = Sequelize.Op;
   User.find({where:{id:4}})
  .then((user)=>{
    // Group.findAll({where:{id:{[gt]:2}}})
    Group.findAll({where:{id:[2,4,6]}})
    .then((groups)=>{

      user.setGroups(groups)
      .then(()=>res.status(200).send('ok!'))
      .catch((er)=>{res.status(500).send('cos nie tak, '+er)});

    })
    .catch(er=>console.log('dupa'+er))
    //res.status(200).send('ok!');
  }).catch((er)=>{
    res.status(404).send(er)
  });
};
