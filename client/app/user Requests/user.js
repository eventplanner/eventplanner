angular.module('eventplanner.user', [])
.controller('UserController', function ($scope,$window, EventsTypes, $routeParams, Auth) {
	$scope.signout = function(){
		Auth.signout();
	}
	$scope.showUser = function (){
		EventsTypes.getUser($routeParams.id)
		.then(function(user){
			$scope.user = user;
		})
		.catch(function (error) {
			console.error(error)
		})
	}
	$scope.showUser();
});