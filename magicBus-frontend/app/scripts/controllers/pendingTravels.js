'use strict';

angular.module('magicBus')
    .controller('PendingTravelsCtrl', function ($scope, travelService,driverService,$window,$routeParams) {

        $scope.pendingTravels = {};
        $scope.drivers = {};
        $scope.travel = {};
        $scope.id = $routeParams.idTravel;

        travelService.getPendingTravels().
        	then(function (response) {
            	$scope.pendingTravels = response.data;
        	}, function (error) {
            Materialize.toast('<strong>Ups!</strong> Pending travels could not be obtained.', 4000,'red');
        });

        $scope.details = function (id) {
            $window.location.href = '/#/detailsOfTravel/' + id;
        };

        $scope.deleteTravel = function (id) {
           travelService.deleteTravel(id).
            then(
                function (response) {
                    Materialize.toast('<strong>Well done! </strong> The travel is deleted correctly.', 2000,'green');
                    $window.location.href = '/#/pendingTravels';
                }, 
                function (error) {
                    Materialize.toast('<strong>Ups! </strong> Try again, the travel is not deleted correctly.', 4000,'red');
                }
            );
        };

        $scope.modifyTravel = function (id) {
            $window.location.href = '/#/modifyTravel/' + id;
        };

        $scope.acceptModifyTravel = function (id) {
           travelService.acceptModifyTravel($scope.travel).
            then(
                function (response) {
                    Materialize.toast('<strong>Well done! </strong> The travel is modified correctly.', 2000,'green');
                    /*$window.location.href = '/#/pendingTravels/' + $scope.id;*/
                }, 
                function (error) {
                    Materialize.toast('<strong>Ups! </strong> Try again, the travel is not modified correctly.', 4000,'red');
                }
            );
        },

         driverService.getDrivers().
            then(function (response) {
                $scope.drivers = response.data;
            }, function (error) {
            Materialize.toast('<strong>Ups!</strong> Drivers could not be obtained.', 4000,'red');
        }); 


});