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

    .when('/modifyProfile', {
        templateUrl: 'views/modifyProfile.html',
        controller: 'ProfileCtrl'
      })

    .when('/newTravel', {
        templateUrl: 'views/newTravel.html',
        controller: 'NewTravelCtrl'
      })

     .when('/detailsOfTravel/:idTravel', {
        templateUrl: 'views/detailsOfTravel.html',
        controller: 'DetailsOfTravelCtrl'
      })

     .when('/newDriver', {
        templateUrl: 'views/newDriver.html',
        controller: 'NewDriverCtrl'
      })

     .when('/detailsOfTravelToday/:idTravel', {
        templateUrl: 'views/detailsOfTravelToday.html',
        controller: 'DetailsOfTravelTodayCtrl'
      })

      .when('/travelToday', {
        templateUrl: 'views/travelToday.html',
        controller: 'TravelTodayCtrl'
      })

     .when('/newChild', {
        templateUrl: 'views/newChild.html',
        controller: 'NewChildCtrl'
      })

     .when('/registeredChilds', {
        templateUrl: 'views/registeredChilds.html',
        controller: 'RegisteredChildsCtrl'
      })


     .when('/modifyTravel/:idTravel', {
        templateUrl: 'views/modifyTravel.html',
        controller: 'ModifyTravelCtrl'
      })

     .when('/modifyDriver/:idDriver', {
        templateUrl: 'views/modifyDriver.html',
        controller: 'ModifyDriverCtrl'
      })

     .when('/modifyChild/:idChild', {
        templateUrl: 'views/modifyChild.html',
        controller: 'ModifyChildCtrl'
      })

     .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })

      .when('/newTravelForChild', {
        templateUrl: 'views/newTravelForChild.html',
        controller: 'NewTravelForChildCtrl'
      })

      .when('/travelsForChild', {
        templateUrl: 'views/travelsForChild.html',
        controller: 'TravelsForChildCtrl'
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

     .when('/home', {
        templateUrl: 'home.html',
        controller: 'HomeCtrl'
      })

    .otherwise({
        redirectTo: '/'
      });
      
  });