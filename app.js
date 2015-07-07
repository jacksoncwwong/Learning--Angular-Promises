var app = angular.module('userApp', ['ngRoute']);

app.config(function($routeProvider, $httpProvider) {
  $routeProvider
    .when('/login', {
      templateUrl: 'login.html',
      controller: 'LoginCtrl as ctrl'
    })
    .when('/profile', {
      templateUrl: 'profile.html',
      controller: 'ProfileCtrl as ctrl',
      resolve: {
        app:function(api, $location) {
          console.log("I'm resolved!!!");
          return api.getProfile()
          .catch(function(response){
            console.log(response);
            $location.path('/login');
          });
        }
      }
    })
    .otherwise({
      redirectTo: '/login'
    });

  $httpProvider.interceptors.push(function() {
    return {
      'request': function(config) {
        config.headers = config.headers || {};
        if (localStorage.authToken) {
          config.headers.Authorization = localStorage.authToken;
        }
        return config;
      }
    };
  });
});