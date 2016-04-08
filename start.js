// What enviroment are you on?
// set NODE_ENV environment variable on your operating system 
// $ export NODE_ENV=development

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var mongoose = require('./config/mongoose'),
    express = require('./config/express'),
    passport = require('./config/passport');

<<<<<<< HEAD
var db = mongoose();
=======

var db = mongoose();    
>>>>>>> origin/master
var app = express();
var passport = passport();

    app.listen(3000);
    module.exports = app;
    console.log('timeshareAPP started successfully visit port:3000/');


    