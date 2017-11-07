'use strict';

angular.module('magicBus')
    .controller('DetailsOfTravelCtrl', function ($scope, travelService, mapService, $routeParams, $window, $location, $filter) {

        $scope.id = $routeParams.idTravel;
        $scope.childsOfTravel = {};
        $scope.child = {};
       
        travelService.getChildsOfTravel($scope.id).
            then(function (response) {
                $scope.childsOfTravel = response.data;
            }, function (error) {
            Materialize.toast($filter('translate')('<strong>Ups! </strong> This travel has not kids assigned'), 4000,'red');
        });

         $scope.initialize = function () {
            mapService.initMap($scope.childsOfTravel);
        }
        
        setTimeout(function(){$scope.initialize();}, 500);
});