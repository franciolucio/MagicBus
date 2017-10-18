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

        $scope.save = function () {

           travelService.saveAssist($scope.checkboxes,$scope.id).
            then(
                function (response) {
                    Materialize.toast('<strong>Well done! </strong> The travel is save correctly.', 2000,'green');
                    $window.location.href = '/#/travelToday/';
                }, 
                function (error) {
                    Materialize.toast('<strong>Ups! </strong> Try again, the travel is not save correctly.', 4000,'red');
                }
            );
        },

        $scope.checkboxes = [];
        
        $scope.selectAssist = function (idChild) {
            
        };

       /* function load(){   
            for (i = 0; i < checkboxes.length; i++) {
                checkboxes[i].checked = localStorage.getItem(checkboxes[i].id) === 'true' ? true:false;
            }
        };

         

        load();*/
       
        $scope.initialize = function () {
            mapService.initMap($scope.childsOfTravel);
        }
        
        setTimeout(function(){$scope.initialize();}, 500);
});