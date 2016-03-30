// What enviroment are you on?
// set NODE_ENV environment variable on your operating system 
// $ export NODE_ENV=development

process.env.NODE_ENV = process.env.NODE_ENV || 'development';


var express = require('./config/express');
var app = express();


   app.listen(3000);
   module.exports = app;
   console.log('timeshareAPP started successfully visit port:3000/');