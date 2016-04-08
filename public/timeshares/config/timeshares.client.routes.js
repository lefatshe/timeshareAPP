angular.module('timeshares')
	.config(['$routeProvider',
     	function($routeProvider) {
       		$routeProvider.
       			when('/timeshares', {
         			templateUrl: 'timeshares/views/list-timeshares.client.view.html'
       			}).
       			when('/timeshares/create', {
         			templateUrl: 'timeshares/views/create-timeshare.client.view.html'
				}). 
				when('/timeshares/:timeshareId', {
					templateUrl: 'timeshares/views/view-timeshare.client.view.html'
       			}).
				when('/timeshares/:timeshareId/edit', {
					templateUrl: 'timeshares/views/edit-timeshare.client.view.html'
				}); 
			}
]);