// simply loads the correct configuration file according to the 
// set process.env.NODE_ENV environment variable

module.exports = require('./env/' + process.env.NODE_ENV + '.js');