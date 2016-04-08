angular.module('timeshares')
	.controller('TimesharesController', ['$scope','$routeParams', '$location', 'Authentication', 'Timeshares',
   	
   	function($scope, $routeParams, $location, Authentication, Timeshares){
       	$scope.authentication = Authentication;

       	$scope.create = function() {
		    var timeshare = new Timeshares({
		       title: this.title,
		       content: this.content
		    });

		    timeshare.$save(function(response) {
		       	$location.path('timeshares/' + response._id);
		    }, function(errorResponse) {
		       	$scope.error = errorResponse.data.message;
		 	}); 
		};


		$scope.find = function() {
     		$scope.timeshares = Timeshares.query();
		};
   		$scope.findOne = function() {
     		$scope.timeshare = Timeshares.get({
       			timeshareId: $routeParams.timeshareId
     		});
		};

		$scope.update = function() {
		     $scope.timeshare.$update(function() {
		       $location.path('timeshares/' + $scope.timeshare._id);
		     }, function(errorResponse) {
		       $scope.error = errorResponse.data.message;
		     });
		};

		$scope.delete = function(timeshare) {
     		if (timeshare) {
       			timeshare.$remove(function() {
         	for (var i in $scope.timeshares) {
           		if ($scope.timeshares[i] === timeshare) {
           			$scope.timeshares.splice(i, 1);
           		}
			} });
			     } else {
			       $scope.timeshare.$remove(function() {
			         $location.path('timeshares');
			       });
		} };



    }
]);