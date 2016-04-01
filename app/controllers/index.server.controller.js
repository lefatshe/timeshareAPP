// first argument is the name
// of your EJS template without the .ejs extension, and the second argument is an object containing your template variables

exports.render = function(req, res) {

	if (req.session.lastVisit) {
       console.log(req.session.lastVisit);
	}
    
    req.session.lastVisit = new Date();

	  res.render('index', {
	     title: 'Customer'
	  })
};