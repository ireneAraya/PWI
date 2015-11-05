/*var submodule = (puede iniciar con una variable)*/angular.module('bootstrap.controllers', [])

/*submodule*/.controller('HomeController', ['$scope' ,function($scope){
	$scope.title = 'Hello World';
	$scope.promotions = [
		{name: 'Coca Cola', price: '$2'},
		{name: 'Pepsi', price: '$3'},
		{name: 'Red Bull', price: '$4'}
	];
	$scope.add = function(){
		var newpromotion = angular.copy($scope.newpromotion);
		$scope.promotions.push(newpromotion);
	};
}])

.controller('ProductsController', [function(){

}]);