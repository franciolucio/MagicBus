'use strict';

angular
  .module('magicBus', ['ngRoute'])
    .config(function ($routeProvider) {

    $routeProvider
    .when('/', {
        templateUrl: 'views/map.html',
        controller: 'MapCtrl'
      })

    .otherwise({
        redirectTo: '/'
      });
      
  });