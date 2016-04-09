angular.module('admin')
	.config(['$routeProvider',
     	function($routeProvider) {
       		$routeProvider.
       			when('/', {
         			templateUrl: 'admin_mod/views/cntrl.client.view.html'
       		}).
     			otherwise({
      				redirectTo: '/CntrlPanel'
			}); 
     	}
]);