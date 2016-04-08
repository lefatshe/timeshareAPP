var config = require('./config'),
    mongoose = require('mongoose');

<<<<<<< HEAD

    module.exports = function() {
    	var db = mongoose.connect(config.db);

    	// register the mongoose model
    	require('../app/models/user.server.model');
		return db; 
	};
=======
module.exports = function() {
    var db = mongoose.connect(config.db);

    require('../app/models/user.server.model');
    require('../app/models/timeshareUnit.server.model');

	return db;
};
>>>>>>> origin/master
