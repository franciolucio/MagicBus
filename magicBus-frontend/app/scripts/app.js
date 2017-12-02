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
    'socialLogin',
    'angular-toArrayFilter'
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
        templateUrl: 'views/parent/login.html',
        controller: 'LoginCtrl'
      })

    .when('/profileParent', {
        templateUrl: 'views/parent/profileParent.html',
        controller: 'ProfileParentCtrl'
      })

    .when('/modifyProfileParent', {
        templateUrl: 'views/parent/modifyProfileParent.html',
        controller: 'ProfileParentCtrl'
      })

    .when('/profileAdmin', {
        templateUrl: 'views/admin/profileAdmin.html',
        controller: 'ProfileAdminCtrl'
      })

    .when('/modifyProfileAdmin', {
        templateUrl: 'views/admin/modifyProfileAdmin.html',
        controller: 'ProfileAdminCtrl'
      })

    .when('/profileDriver', {
        templateUrl: 'views/driver/profileDriver.html',
        controller: 'ProfileDriverCtrl'
      })

    .when('/newTravelOccasional', {
        templateUrl: 'views/admin/newTravelOccasional.html',
        controller: 'NewTravelOccasionalCtrl'
      })

    .when('/newTravelDiary', {
        templateUrl: 'views/admin/newTravelDiary.html',
        controller: 'NewTravelDiaryCtrl'
      })

     .when('/detailsOfTravel/:idAdmin/:idTravel', {
        templateUrl: 'views/admin/detailsOfTravel.html',
        controller: 'DetailsOfTravelCtrl'
      })

     .when('/detailsOfHistoricTravel/:idAdmin/:idTravel', {
        templateUrl: 'views/admin/detailsOfHistoricTravel.html',
        controller: 'DetailsOfHistoricTravelCtrl'
      })

     .when('/newDriver', {
        templateUrl: 'views/admin/newDriver.html',
        controller: 'NewDriverCtrl'
      })

     .when('/detailsOfTravelTodayDriver/:idTravel/:idDriver', {
        templateUrl: 'views/driver/detailsOfTravelTodayDriver.html',
        controller: 'DetailsOfTravelTodayDriverCtrl'
      })

     .when('/detailsOfTravelTodayParent/:idParent/:idChild/:idTravel', {
        templateUrl: 'views/parent/detailsOfTravelTodayParent.html',
        controller: 'DetailsOfTravelTodayParentCtrl'
      })

      .when('/travelToday', {
        templateUrl: 'views/driver/travelToday.html',
        controller: 'TravelTodayCtrl'
      })

     .when('/newChild', {
        templateUrl: 'views/parent/child/newChild.html',
        controller: 'NewChildCtrl'
      })

     .when('/registeredChilds', {
        templateUrl: 'views/parent/child/registeredChilds.html',
        controller: 'RegisteredChildsCtrl'
      })

     .when('/modifyTravel/:idTravel', {
        templateUrl: 'views/admin/modifyTravel.html',
        controller: 'ModifyTravelCtrl'
      })

     .when('/modifyDriver/:idDriver', {
        templateUrl: 'views/admin/modifyDriver.html',
        controller: 'ModifyDriverCtrl'
      })

     .when('/modifyChild/:idChild', {
        templateUrl: 'views/parent/child/modifyChild.html',
        controller: 'ModifyChildCtrl'
      })

     .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })

      .when('/newTravelForChild', {
        templateUrl: 'views/parent/newTravelForChild.html',
        controller: 'NewTravelForChildCtrl'
      })

      .when('/travelsForChild', {
        templateUrl: 'views/parent/travelsForChild.html',
        controller: 'TravelsForChildCtrl'
      })

     .when('/drivers', {
        templateUrl: 'views/admin/drivers.html',
        controller: 'DriversCtrl'
      })

     .when('/pendingTravels', {
        templateUrl: 'views/admin/pendingTravels.html',
        controller: 'PendingTravelsCtrl'
      })

     .when('/historicTravels', {
        templateUrl: 'views/admin/historicTravels.html',
        controller: 'HistoricTravelsCtrl'
      })

     .when('/registeredParents', {
        templateUrl: 'views/admin/registeredParents.html',
        controller: 'RegisteredParentsCtrl'
      })

     .when('/pendingParents', {
        templateUrl: 'views/admin/pendingParents.html',
        controller: 'PendingParentsCtrl'
      })

     .when('/comunications', {
        templateUrl: 'views/messages/comunications.html',
        controller: 'ComunicationsCtrl'
      })

    .otherwise({
        redirectTo: '/'
      });
      
  });