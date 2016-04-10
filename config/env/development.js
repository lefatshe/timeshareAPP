// To solve this issue, you can manage a set
// of environment con guration  les that holds these properties. You will then be
// able to use the process.env.NODE_ENV environment variable to determine which con guration  le to load


module.exports = {
     db: 'mongodb://127.0.0.1/dbase',
     sessionSecret: 'developmentSessionSecret'
};