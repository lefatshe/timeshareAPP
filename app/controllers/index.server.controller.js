// first argument is the name
// of your EJS template without the .ejs extension, and the second argument is an object containing your template variables

exports.render = function(req, res) {
<<<<<<< HEAD

	if (req.session.lastVisit) {
       console.log(req.session.lastVisit);
	}
    
    req.session.lastVisit = new Date();

	  res.render('index', {
	     title: 'Customer'
	  })
=======
     res.render('index', {
     title: 'Customer',
     userFullName: req.user ? req.user.fullName : ''
  })
>>>>>>> origin/master
};