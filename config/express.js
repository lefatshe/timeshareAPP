// The express.js  file is where we configure our Express application. 
// This is where we add everything related to the Express configuration.

// load express framework modules
var config = require('./config'),
    express = require('express'),
    morgan = require('morgan'),
    compress = require('compression'), 
    bodyParser = require('body-parser'), 
    methodOverride = require('method-override'), 
    session = require('express-session'), 
    flash = require('connect-flash'),
    passport = require('passport');


module.exports = function() {
	var app = express(); 

	if (process.env.NODE_ENV === 'development') {
    	app.use(morgan('dev'));
    } else if (process.env.NODE_ENV === 'production') {
    	app.use(compress());
	}

	app.use(bodyParser.urlencoded({
    	extended: true
    }));
    app.use(bodyParser.json());
    app.use(methodOverride());

    // configure the Express application views folder and template engine
    app.set('views', './app/views');
    app.set('view engine', 'ejs');

    app.use(flash());
    app.use(session({ cookie: { maxAge: 60000 }, 
                  secret: 'developmentSessionSecret',
                  resave: false, 
                  saveUninitialized: false}));
    app.use(passport.initialize());
    app.use(passport.session());


    // get app routes
	require('../app/routes/index.server.routes.js')(app); 
	require('../app/routes/admin.server.routes.js')(app); 

	 app.use(express.static('./public'));

	return app;
};