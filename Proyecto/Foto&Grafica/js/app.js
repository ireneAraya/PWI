var app = angular.module('fotografica', ['ngRoute']);
app.config(['$routeProvider', function($routeProvider) {
	$routeProvider

	.when('/', {
		templateUrl: 'views/home.html'
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
	.when('/blog', {
		templateUrl: 'views/blog.html'
	})
	.otherwise({
		redirectTo: '/'
	});
}]);