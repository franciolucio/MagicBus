'use strict';

angular
  .module('magicBus', ['ngRoute'])
    .config(function ($routeProvider) {

    $routeProvider
    .when('/', {
        templateUrl: 'views/clientes.html',
        controller: 'ClientCtrl'
      })

    .when('/map', {
        templateUrl: 'views/map.html',
        controller: 'MapCtrl'
      })

    .otherwise({
        redirectTo: '/'
      });
      
  });