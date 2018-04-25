const sequelize = require('./api/models/sequelize');
const User = require('./api/models/user');
const Group = require('./api/models/group');
const Subscription = require('./api/models/subscription');


User.sync().then(()=>{
  Group.sync()
  .then(()=>{
    Subscription.sync()
    .then(()=>{
      console.log('..tables succesfully created!!');
      sequelize.close();
    })
  })
}).catch((er)=>console.log(er));
