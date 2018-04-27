const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

//routes
const userRoutes = require('./api/routes/users');
const groupRoutes = require('./api/routes/groups');

//set port
const port = process.env.PORT || 3000;

//cors
app.use(cors());

//morgan
app.use(morgan('dev'));

//bodyParser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//static
app.use(express.static(path.join(__dirname, 'public')));

//use routes
app.use('/api/users', userRoutes);
app.use('/api/groups', groupRoutes);

//index route
app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname,'public/index.html'));
});

app.listen(port, () => {
  console.log(`server started on port ${port}`);
})
