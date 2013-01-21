'use strict';

var angIssueApp = angular.module('angIssueApp', [])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/rt1', {
        templateUrl: 'views/rt1.html',
        controller: 'Rt1Ctrl'
      })
      .when('/rt2', {
        templateUrl: 'views/rt2.html',
        controller: 'Rt2Ctrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
