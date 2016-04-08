var users = require('../controllers/users.server.controller'),
    timeshares = require('../controllers/timeshareUnit.server.controller'),
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

      app.get('/signout', users.signout);

      // Timeshare Unit Routes
      app.route('/api/timeshares')
        .get(timeshares.list)
        .post(users.requiresLogin, timeshares.create);

      app.route('/api/timeshares/:articleId')
        .get(timeshares.read)
        .put(users.requiresLogin, timeshares.hasAuthorization, timeshares.update)
        .delete(users.requiresLogin, timeshares.hasAuthorization, timeshares.delete);

      app.param('timeshareId', timeshares.timeshareByID);
};



