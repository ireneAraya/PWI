var factories = angular.module('chatApp.factories', ['firebase']);

factories.factory('$message', ['$firebaseArray', function($firebaseArray){
	var ref = new Firebase('https://chat506.firebaseio.com/messages');
	var messages = $firebaseArray(ref);

	var create = function(message){
		return messages.$add(message);
	};

	var get = function(messageId){
		return $firebaseObject( ref.child('messages').child(messageId) );
	};

	var eliminate = function(message){
		return messages.$remove(message);
	};

	//var messages = [
	//{'name': 'Pedro', 'text': '¡Hola!'},
	//{'name': 'María', 'text': '¿Qué tal?'},
	//{'name': 'Pedro', 'text': '¿Bien?'},
	//{'name': 'María', 'text': 'Todo bien, por dicha'},
	//];

	return {
		all: messages,
		create: create,
		get: get,
		eliminate: eliminate
	};
}]);