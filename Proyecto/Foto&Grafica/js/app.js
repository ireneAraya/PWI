var app = angular.module('fotografica', ['ngRoute','fotografica.controllers'])
app.config(['$routeProvider', function($routeProvider) {
	$routeProvider

	.when('/', {
		templateUrl: 'views/home.html',
		controller: 'HomeController'
	})
	.when('/design', {
		templateUrl: 'views/design.html'
	})
	.when('/photo', {
		templateUrl: 'views/photo.html'
	})
	.when('/contact', {
		templateUrl: 'views/contact.html'
	})
	.when('/store', {
		templateUrl: 'views/store.html'
	})
	.otherwise({
		redirectTo: '/'
	});
}]);