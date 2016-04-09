// first argument is the name
// of your EJS template without the .ejs extension, and the second argument is an object containing your template variables

exports.render = function(req, res) {
     res.render('cntrlpanel', {
       title: 'Administrator',
       user: JSON.stringify(req.user)
  })
};

