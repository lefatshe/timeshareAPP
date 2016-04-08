// first argument is the name
// of your EJS template without the .ejs extension, and the second argument is an object containing your template variables

exports.render = function(req, res) {
<<<<<<< HEAD
  res.render('cntrlPanel', {
     title: 'Administrator',
     userFullName: req.user ? req.user.fullName : ''
=======
     res.render('cntrlpanel', {
     title: 'Administrator',
     user: JSON.stringify(req.user)
>>>>>>> origin/master
  })
};

