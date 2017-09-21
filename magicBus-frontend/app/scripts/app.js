'use strict';

angular
  .module('magicBus', [
    'ngAnimate',
    'pascalprecht.translate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngMaterial',
    'ngFlash',
    'socialLogin'
  ])
  

  //angular 1.6 route fix
  .config(['$locationProvider', function ($locationProvider) {
    $locationProvider.hashPrefix('');
  }])

  .config(function (socialProvider) {
    socialProvider.setGoogleKey("1095950204639-n1r4sr85311r76gou6vl3vgj91g7lvij.apps.googleusercontent.com");
  })

  /*1095950204639-n1r4sr85311r76gou6vl3vgj91g7lvij.apps.googleusercontent.com*/
  /*15090035877-h3c92ambrt0b7fk31ksfubkedr3faor3.apps.googleusercontent.com*/



  //datePicker Config
  .config(function ($mdDateLocaleProvider) {
    $mdDateLocaleProvider.formatDate = function (date) {
    var format = 'YYYY-MM-DD';
    if ((navigator.language || navigator.userLanguage) === 'es_ES') {
        format = 'DD-MM-YYYY';
    }
    else {
        format = 'MM-DD-YYYY';
        format = 'DD-MM-YYYY';
    }
      return moment(date).format(format);
    };
  })


  .run(function ($rootScope, $location, userService) {
    $rootScope.$on('$routeChangeStart', function (event) {
      if (!userService.isLoggedIn()) {
        console.log('DENY');
        $location.path('/login');
      }
      else {
        console.log('ALLOW');
      }
    });
  })
  

  .config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl'
      })

    .when('/map', {
        templateUrl: 'views/map.html',
        controller: 'MapCtrl'
      })

    .when('/newTravel', {
        templateUrl: 'views/newTravel.html',
        controller: 'NewTravelCtrl'
      })

     .when('/newDriver', {
        templateUrl: 'views/newDriver.html',
        controller: 'NewDriverCtrl'
      })

     .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })

     .when('/drivers', {
        templateUrl: 'views/drivers.html',
        controller: 'DriversCtrl'
      })

     .when('/pendingTravels', {
        templateUrl: 'views/pendingTravels.html',
        controller: 'PendingTravelsCtrl'
      })

     .when('/historicTravels', {
        templateUrl: 'views/historicTravels.html',
        controller: 'HistoricTravelsCtrl'
      })

     .when('/registeredParents', {
        templateUrl: 'views/registeredParents.html',
        controller: 'RegisteredParentsCtrl'
      })

     .when('/pendingParents', {
        templateUrl: 'views/pendingParents.html',
        controller: 'PendingParentsCtrl'
      })

    .otherwise({
        redirectTo: '/'
      });
      
  });