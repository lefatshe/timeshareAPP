var mongoose = require('mongoose'),
    timeshareUnit = mongoose.model('timeshareUnit');


var getErrorMessage = function(err) {
     if (err.errors) {
       for (var errName in err.errors) {
         if (err.errors[errName].message) return err.errors[errName].
			message; }
     } else {
       return 'Unknown server error';
} };


exports.create = function(req, res) {
    var timeshare = new timeshareUnit(req.body);

    timeshare.creator = req.user;
    timeshare.save(function(err) {
    if (err) {
        return res.status(400).send({
        message: getErrorMessage(err)
	});
	} else {
         res.json(timeshare);
       }
	}); 
};



exports.list = function(req, res) {
    timeshareUnit.find().sort('-created').populate('creator', 'firstName lastName fullName').exec(function(err, timeshares) {
       	if (err) {
       		return res.status(400).send({
           	message: getErrorMessage(err)
		});
		} else {
         	res.json(timeshares);
       	}
	}); 
};



exports.timeshareByID = function(req, res, next, id) {
     	timeshareUnit.findById(id).populate('creator', 'firstName lastName fullName').exec(function(err, timeshare) {
       			if (err) return next(err);
       			if (!timeshare) return next(new Error('Failed to load timeshare '+ id));
       			req.timeshare = timeshare;
				next(); 
		});
};


exports.read = function(req, res) {
     res.json(req.timeshare);
};


exports.update = function(req, res) {
     var timeshare = req.timeshare;

     timeshare.title = req.body.title;
     timeshare.content = req.body.content;

    article.save(function(err) {
       	if (err) {
         	return res.status(400).send({
           	message: getErrorMessage(err)
		});
		} else {
         	res.json(timeshare);
       	}
	}); 
};


exports.delete = function(req, res) {
    var timeshare = req.timeshare;

    timeshare.remove(function(err) {
       		if (err) {
         		return res.status(400).send({
           		message: getErrorMessage(err)
 		});
		} else {
      			res.json(timeshare);
    	}
	}); 
};


exports.hasAuthorization = function(req, res, next) {
       	if (req.timeshare.creator.id !== req.user.id) {
           	return res.status(403).send({
               message: 'User is not authorized'
			}); 
        }
	next(); 
};















