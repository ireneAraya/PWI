var app= angular.module('app',['ngRoute','firebase']);

app.config([
	'$routeProvider',function($routeProvider){
		$routeProvider.when('/',{
			templateUrl: 'templates/listUser.html',
			controller: 'listUserController'
		}).when('/user/create',{
			templateUrl: 'templates/user.html',
			controller: 'userCreateController'
		}).when('/user/edit/:id',{
			templateUrl: 'templates/user.html',
			controller: 'userEditController'
		}).otherwise({
			redirectTo:'/'
		});
	}
]);

app.factory('modelUser',[
	'$firebaseArray',function($firebaseArray){
		var $db= new Firebase('https://angularcrudex.firebaseio.com/users'),
			Users= $firebaseArray($db),
			lengthUser= function(){
				return Users.length;
			};	
		return {
			list : function(){
				return Users;
			},
			findUser: function(id){
				return Users.$getRecord(id);
			},
			saveUser: function(user){
				if(typeof user.id == 'undefined'){
					var index= lengthUser();
					user.id= index+1;
					Users.$add(user);
				}else{
					Users.$update(user);
				}
			},
		};
	}
]);

app.controller('listUserController',[
	'$scope','modelUser',function($scope,User){
		$scope.title='Listar Usuarios';
		$scope.users= User.list();
	}
]);

app.controller('userCreateController',[
	'$scope','$location','modelUser',function($scope,$location,User){
		$scope.title= 'Crear Usuario';
		$scope.user={};
		$scope.saveUser= function(){
			User.saveUser($scope.user);
			$location.url('/');
		}
	}
]);

app.controller('userEditController',[
	'$scope','$location','$routeParams','modelUser',function($scope,$location,$routeParams,User){
		$scope.title='Editar Usuario';
		$scope.user= User.findUser($routeParams.id);
		$scope.saveUser= function(){
			User.saveUser($scope.user);
			$location.url('/');
		}
	}
]);