angular.module('eventplanner.services', [])

.factory('EventsTypes', function ($http) {
  var getAllEventsTypes = function () {
    return $http({
      method: 'GET',
      url: '/api/events'
    })
    .then(function (res) {
      return res.data;
    });
  }
  
  var getOneEventType = function(eventName){
    return $http({
      method: 'GET',
      url: '/api/events/event'+eventName
    })
    .then(function(resp){
      return resp.data;
    });
  }

  var getUser = function(userID){
    return $http({
      method : 'GET',
      url : '/api/user/'+userID
    })
    .then(function(res){
      return res.data;
    })
  }
})
///////////////////////////////////////////////////////////////////
  .factory('EventsItems', function ($http) {
  var getAllEventsItems = function () {
    return $http({
      method: 'GET',
      url: '/api/eventsItems'
          })
    .then(function (res) {
      return res.data;
    });
  }
  
  var getOneEventItem = function(eventName){
    return $http({
      method: 'GET',
      url: '/api/eventsItems/eventItems'+eventName
    })
    .then(function(resp){
      return resp.data;
    });
  }
})
///////////////////////////////////////////////////////////////////

.factory('Auth', function ($http, $location, $window) {
  var signin = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signin',
      data: user
    })
    .then(function (resp) {
      return resp.data;
    });
  };

  var signup = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signup',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var isAuth = function () {
    return !!$window.localStorage.getItem('com.eventplanner');
  };

  var signout = function () {
    $window.localStorage.removeItem('com.eventplanner');
    $location.path('/signin');
  };


  return {
    signin: signin,
    signup: signup,
    isAuth: isAuth,
    signout: signout
  };
});
