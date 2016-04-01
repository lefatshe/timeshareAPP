// require control files
	var admin = require('../controllers/admin.server.controller'); 
	var users = require('../controllers/users.server.controller');
	var passport = require('passport');

module.exports = function(app) {
	// base url 
	var adminBaseUrl = '/CntrlPanel';

	// User Management
	// set = Administrator
	app.get(adminBaseUrl, admin.render);

	// set users
	app.route(adminBaseUrl + '/users')
     	.post(users.create)
     	.get(users.list);
    // manage users
    app.route(adminBaseUrl + '/users/:userId')
        .get(users.read)
        .put(users.update)
        .delete(users.delete);

    app.param('userId', users.userByID);

    // Passport
    // Confiqure SignIn/SignUp using passport

    //SignUp
    app.route(adminBaseUrl + '/signup')
       .get(users.renderSignup)
       .post(users.signup);
    // SignIn
    app.route(adminBaseUrl + '/signin')
        .get(users.renderSignin)
        .post(passport.authenticate('local', {
          successRedirect: adminBaseUrl,
          failureRedirect: adminBaseUrl + '/signin',
          failureFlash: true
	}));
    // SignOut
    app.get(adminBaseUrl + '/signout', users.signout);
};



