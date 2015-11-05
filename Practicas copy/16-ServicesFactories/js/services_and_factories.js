myGrocery.factory('ItemFactory', function($firebaseArray) {
	var fireRef = new Firebase('https://grocery-store-ex.firebaseio.com/items');
	return{
		getAllItems: function() {
			return $firebaseArray(fireRef);
		}
	}
});