const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

//routes
const userRoutes = require('./api/routes/users');
const groupRoutes = require('./api/routes/groups');

//set port
const port = process.env.PORT || 3000;

//morgan
app.use(morgan('dev'));

//bodyParser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//static
app.use(express.static(path.join(__dirname, 'public')));

//use routes
app.use('/users', userRoutes);
app.use('/groups', groupRoutes);

//index route
app.get('*', (req,res) => {
  res.send('hello, try /users or /groups endpoint');
});

app.listen(port, () => {
  console.log(`server started on port ${port}`);
})
