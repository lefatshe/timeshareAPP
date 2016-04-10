angular.module('timeshares')
	.factory('Timeshares', ['$resource',
   		function($resource) {
     		return $resource('/CntrlPanel/api/timeshares/:timeshareId', {
       		timeshareId: '@_id'
		}, 
		{ update: {
         	method: 'PUT'
       	}
	}); 
}]);
