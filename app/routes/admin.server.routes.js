module.exports = function(app) {
	var admin = require('../controllers/admin.server.controller'); 

	app.get('/CntrlPanel', admin.render);
 };