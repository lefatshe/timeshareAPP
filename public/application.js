// use the manual bootstrapping mechanism. 
// This will allow you to better control the initialization process of your application.

var mainApplicationModuleName = 'timeshare';
// add module as a dependency of the main application module
var mainApplicationModule = angular.module(mainApplicationModuleName, ['ngResource', 'ngRoute', 'users', 'admin', 'timeshares']);


// confiquring the URL scheme
mainApplicationModule.config(['$locationProvider',
     function($locationProvider) {
       $locationProvider.hashPrefix('!');
     }
]);

// solve Facebook's redirect bug that adds a hash part to the application's 
// URL after the OAuth authentication round-trip
if (window.location.hash === '#_=_') window.location.hash = '#!';


angular.element(document).ready(function() {
     angular.bootstrap(document, [mainApplicationModuleName]);
});