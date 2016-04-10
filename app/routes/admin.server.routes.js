var users = require('../controllers/users.server.controller'),
    timeshares = require('../controllers/timeshares.server.controller'),
    passport = require('passport');

module.exports = function(app) {
	var admin = require('../controllers/admin.server.controller'); 
	app.get('/CntrlPanel', admin.render);

      app.route('/CntrlPanel/signup')
        .get(users.renderSignup)
        .post(users.signup);

      app.route('/CntrlPanel/signin')
        .get(users.renderSignin)
        .post(passport.authenticate('local', {
          successRedirect: '/CntrlPanel',
          failureRedirect: '/CntrlPanel/signin',
          failureFlash: true
      }));

      app.get('/CntrlPanel/signout', users.signout);

};



