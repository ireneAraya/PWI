var app = angular.module('patrones', ['ngRoute']);
app.config(['$routeProvider', function($routeProvider) {
	$routeProvider

	.when('/', {
		templateUrl: 'views/home.html'
	})
	.when('/categorias', {
		templateUrl: 'views/categorias.html'
	})
	.when('/provincias', {
		templateUrl: 'views/provincias.html'
	})
	.otherwise({
		redirectTo: '/'
	});
}]);