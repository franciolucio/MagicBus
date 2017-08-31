'use strict';

angular
  .module('magicBus', ['ngRoute'])
    .config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/map.html',
        controller: 'MapCtrl'
      })
    .when('/clientes', {
        templateUrl: 'views/clientes.html',
        controller: 'ClientCtrl'
      })
    .otherwise({
        redirectTo: '/'
      });
      
  });