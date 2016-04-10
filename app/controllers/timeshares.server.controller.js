 var mongoose = require('mongoose'),
     Timeshare = mongoose.model('Timeshare');

// getErrorMessage() method gets the Mongoose error object passed 
// as an argument then iterates over the errors collection and extract the  rst message.
var getErrorMessage = function(err) {
     if (err.errors) {
       for (var errName in err.errors) {
         if (err.errors[errName].message) return err.errors[errName].
			message; }
     } else {
       return 'Unknown server error';
} };

// create() method
// of the Express controller will provide the basic functions to create timeshare article
exports.create = function(req, res) {
    
    var timeshare = new Timeshare(req.body);

    timeshare.creator = req.user;
    timeshare.save(function(err) {
    if (err) {
        return res.status(400).send({
        message: getErrorMessage(err)
      });
    } 
      else {
          res.json(timeshare);
      }
    }); 
};

// list() method 
// of the Express controller will provide the basic operations to retrieve a list of existing articles.
exports.list = function(req, res) {
    Timeshare.find().sort('-created').populate('creator', 'firstName lastName fullName').exec(function(err, timeshares) {
      if (err) {
        return res.status(400).send({
        message: getErrorMessage(err)
      });
    } 
    else {
         res.json(timeshares);
      }
    }); 
};

// The read() method 
// of the Express controller will provide the basic operations to read an existing article document from the database
exports.timeshareByID = function(req, res, next, id) {
    Timeshare.findById(id).populate('creator', 'firstName lastName fullName').exec(function(err, timeshare) {
      if (err) return next(err);
      if (!timeshare) return next(new Error('Failed to load timeshare ' + id));
      req.timeshare = timeshare;
      next(); 
    });
};

// The read() method 
// of the Express controller, which will return an article object. 
exports.read = function(req, res) {
    res.json(req.timeshare);
};

// The update() method 
// of the Express controller will provide the basic operations to update an existing article document.
exports.update = function(req, res) {
    var timeshare = req.timeshare;

    // retrieve existing timeshare object as the base object, and then update the:
    // Timeshare Discriptions 
    timeshare.title = req.body.title;
    timeshare.category = req.body.category;
    timeshare.province = req.body.province;
    timeshare.discription = req.body.discription;
    // images
    timeshare.images = req.body.images;
    // attractions
    timeshare.attractions = req.body.attractions;
    timeshare.nearby = req.body.nearby;
    // purchase price & discription
    timeshare.purchase = req.body.purchase;
    timeshare.price = req.body.price;
    timeshare.bedrooms = req.body.bedrooms;
    timeshare.datemin = req.body.datemin;
    timeshare.datemax = req.body.datemax;
    
    // save the timeshare, and then output the updated timeshare object as a JSON representation
    timeshare.save(function(err) {
      if (err) {
        return res.status(400).send({
        message: getErrorMessage(err)
      });
      } 
      else {
        res.json(timeshare);
      }
    }); 
};

// he delete() method 
// of the Express controller will provide the basic operations to delete an existing article document.
exports.delete = function(req, res) {
    var timeshare = req.timeshare;

    timeshare.remove(function(err) {
       		if (err) {
         		return res.status(400).send({
           		message: getErrorMessage(err)
 		});
		} 
    else {
      	res.json(timeshare);
    }
	}); 
};

// Implementing an authorization middleware
exports.hasAuthorization = function(req, res, next) {
      if (req.timeshare.creator.id !== req.user.id) {
        return res.status(403).send({
            message: 'User is not authorized'
			  }); 
      }	
      next(); 
};















