angular.module('timeshares')
	.controller('TimesharesController', ['$scope','$routeParams', '$location', 'Authentication', 'Timeshares',
   	
   	function($scope, $routeParams, $location, Authentication, Timeshares){
       	$scope.authentication = Authentication;

// The create() method 
// of our AngularJS controller will provide the basic operations for creating a new article.
$scope.create = function() {
	var timeshare = new Timeshares({
		    
		    title: this.title,
		    category: this.category;
		    province: this.province;
		    discription: this.discription;

		    // images
		    images: this.images;

		    // attractions
		    attractions: this.attractions;
		    nearby: this.nearby;

		    // purchase price & discription
		    purchase: this.purchase;
		    price: this.price;
		    bedrooms: this.bedrooms;
		    datemin: this.datemin;
		    datemax: this.datemax;

		    // action timeshare
		    availability: this.availability;
		    verify: this.verify;


		});

		timeshare.$save(function(response) {
		    $location.path('/CntrlPanel/timeshares' + response._id);
		}, function(errorResponse) {
		    $scope.error = errorResponse.data.message;
		); 
};


// Your controller will contain two read methods. 
// The  rst will take care of retrieving a single article and the second will retrieve a collection of articles
$scope.find = function() {
    $scope.timeshares = Timeshares.query();
};

$scope.findOne = function() {
    $scope.timeshare = Timeshares.get({
       		timeshareId: $routeParams.timeshareId
     });
};

// The update() method 
// of the AngularJS controller will provide the basic operations for updating an existing article. 
$scope.update = function() {
	$scope.timeshare.$update(function() {
		$location.path('/CntrlPanel/timeshares' + $scope.timeshare._id);
	}, function(errorResponse) {
		$scope.error = errorResponse.data.message;
	});
};


// The delete() method 
// of the AngularJS controller will provide the basic operations for deleting an existing article. 
$scope.delete = function(timeshare) {
    if (timeshare) {
       	timeshare.$remove(function() {
    for (var i in $scope.timeshares) {
	        if ($scope.timeshares[i] === timeshare) {
	           	$scope.timeshares.splice(i, 1);
	        }
		} 
	});
	} else {
			$scope.timeshare.$remove(function() {
				$location.path('/CntrlPanel/timeshares');
			});
		} 
	};

    }
]);