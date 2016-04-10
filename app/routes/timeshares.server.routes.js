// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var users = require('../controllers/users.server.controller'),
	timeshares = require('../controllers/timeshares.server.controller');


module.exports = function(app) {

	
    app.route('/CntrlPanel/api/timeshares')
        .get(timeshares.list)
        .post(users.requiresLogin, timeshares.create);

    app.route('/CntrlPanel/api/timeshares/:timeshareId')
        .get(timeshares.read)
        .put(users.requiresLogin, timeshares.hasAuthorization, timeshares.update)
        .delete(users.requiresLogin, timeshares.hasAuthorization, timeshares.delete);
    
    app.param('timeshareId', timeshares.timeshareByID);

};



