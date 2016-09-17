var app = angular.module('mainApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: './views/homepage.html'
	})
	.when('/about_us', {
		templateUrl: './views/about_us.html'
	})
	.otherwise({ 
		redirectTo: '/' 
	});
});