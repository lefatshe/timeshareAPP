angular.module('management')
	.controller('ManagementController', ['$scope',
	    function($scope) {
	       $scope.page = 'Angular.Js Management Module';
           console.log('loaded ManagementController');

           // Controller-specific code goes here
           $scope.submitSearch = function(click) {
           		//title: this.name
           		alert('search submitted');
           }
           
           		
	    }
 	]);