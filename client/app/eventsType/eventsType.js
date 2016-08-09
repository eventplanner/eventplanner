angular.module('eventplanner.eventsType', [])
.controller('EventsController', function ($scope, Events,$location, Auth) {
	$scope.signout = function(){
		Auth.signout();
	}

	$scope.userId = window.userId;
	$scope.data={};
	Events.getAllEventsTypes()
	.then(function(events){
		$scope.data.events = events;
	})
	.catch(function(error){
		console.error(error)
	})
});