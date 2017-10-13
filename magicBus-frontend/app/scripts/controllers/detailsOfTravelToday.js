'use strict';

angular.module('magicBus')
    .controller('DetailsOfTravelTodayCtrl', function ($scope, travelService, mapService, $routeParams,  $window) {

        $scope.id = $routeParams.idTravel;
        $scope.childsOfTravel = {};
       
        travelService.getChildsOfTravel($scope.id).
            then(function (response) {
                $scope.childsOfTravel = response.data;
            }, function (error) {
            Materialize.toast('<strong>Ups! </strong> This travel has not kids assigned', 4000,'red');
        });

        travelService.getTravelById($scope.id).
            then(function (response) {
                $scope.travel = response.data;
            }, function (error) {
            Materialize.toast('<strong>Ups! </strong> No travel are found', 4000,'red');
        });

        
        $scope.selectTag = function (id) {
          $scope.tags = [];
          $scope.tags.push(id);
        };

       $scope.save = function () {
           travelService.saveAssist($scope.tags,$scope.id).
            then(
                function (response) {
                    Materialize.toast('<strong>Well done! </strong> The travel is save correctly.', 2000,'green');
                    $window.location.href = '/#/travelToday/';
                }, 
                function (error) {
                    Materialize.toast('<strong>Ups! </strong> Try again, the trivel is not save correctly.', 4000,'red');
                }
            );
        },

       
        $scope.initialize = function () {
            mapService.initMap($scope.childsOfTravel);
        }
        
        setTimeout(function(){$scope.initialize();}, 500);
});