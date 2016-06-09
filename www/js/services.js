angular.module('app.services', [])

.factory('Auth', ['$firebaseAuth', function($firebaseAuth) {
	return $firebaseAuth();
}])

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}]);

