angular.module('eventplanner', [
  'eventplanner.services',
  'eventplanner.eventsType',
  'eventplanner.auth',
  'eventplanner.location',
  'eventplanner.wedding',
  'eventplanner.user',
  'ngRoute'
])
.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/signin', {
      templateUrl: 'app/auth/signin.html',
      controller: 'AuthController'
    })
    .when('/signup', {
      templateUrl: 'app/auth/signup.html',
      controller: 'AuthController'
    })
    // add routes when needed for pages
    .when('/eventsType/:id', {
      templateUrl: 'app/eventsType/eventsType.html',
      controller: 'EventsTypeCtrl',
      authenticate: true
    })
    .when('/location', {
      templateUrl: 'app/location/location.html',
      controller: 'LocationCtrl',
      authenticate: true
    })
    .when('/wedding', {
      templateUrl: 'app/wedding/wedding.html',
      controller: 'WeddingCtrl',
      authenticate: true
    })
    .when('/wedding/cake', {
      templateUrl: 'app/wedding/cake/cake.html',
      controller: 'WeddingCtrl',
      authenticate: true
    })
    .when('/wedding/cars', {
      templateUrl: 'app/wedding/cars/cars.html',
      controller: 'WeddingCtrl',
      authenticate: true
    })
    .when('/wedding/flowersDecor', {
      templateUrl: 'app/wedding/flowersDecor/flowersDecor.html',
      controller: 'WeddingCtrl',
      authenticate: true
    })
      .when('/wedding/invitationCards', {
      templateUrl: 'app/wedding/invitationCards/invitationCards.html',
      controller: 'WeddingCtrl',
      authenticate: true
    })
      .when('/wedding/tables', {
      templateUrl: 'app/wedding/tables/tables.html',
      controller: 'WeddingCtrl',
      authenticate: true
    })
    .when('/user/:id', {
      templateUrl: 'app/user/user.html',
      controller: 'UserCtrl',
      authenticate: true
    })
    .otherwise({ redirectTo: '/eventsType' });
    $httpProvider.interceptors.push('AttachTokens');
})

.factory('AttachTokens', function ($window) {
  // this is an $httpInterceptor
  // its job is to stop all out going request
  // then look in local storage and find the user's token
  // then add it to the header so the server can validate the request
  var attach = {
    request: function (object) {
      var jwt = $window.localStorage.getItem('com.shortly');
      if (jwt) {
        object.headers['x-access-token'] = jwt;
      }
      object.headers['Allow-Control-Allow-Origin'] = '*';
      return object;
    }
  };
  return attach;
})
.run(function ($rootScope, $location, Auth) {
  // here inside the run phase of angular, our services and controllers
  // have just been registered and our app is ready
  // however, we want to make sure the user is authorized
  // we listen for when angular is trying to change routes
  // when it does change routes, we then look for the token in localstorage
  // and send that token to the server to see if it is a real user or hasn't expired
  // if it's not valid, we then redirect back to signin/signup
  $rootScope.$on('$routeChangeStart', function (evt, next, current) {
    if (next.$$route && next.$$route.authenticate && !Auth.isAuth()) {
      $location.path('/signin');
    }
  });
});
