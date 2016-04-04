// use the manual bootstrapping mechanism. 
// This will allow you to better control the initialization process of your application.

var mainApplicationModuleName = 'timeshare';
var mainApplicationModule = angular.module(mainApplicationModuleName, []);

angular.element(document).ready(function() {
     angular.bootstrap(document, [mainApplicationModuleName]);
});