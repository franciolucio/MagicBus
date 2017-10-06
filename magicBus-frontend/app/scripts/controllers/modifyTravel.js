'use strict';

angular.module('magicBus')
    .controller('ModifyTravelCtrl', function ($scope, travelService, driverService, $window, $routeParams) {

        $scope.travel = {};
        $scope.drivers = {};
        $scope.id = $routeParams.idTravel;

        travelService.getTravelById($scope.id).
        	then(function (response) {
            	$scope.travel = response.data;
        	}, function (error) {
            Materialize.toast('<strong>Ups!</strong> Pending travels could not be obtained.', 4000,'red');
        });

        $scope.acceptModifyTravel = function (id) {
           travelService.acceptModifyTravel($scope.travel).
            then(
                function (response) {
                    Materialize.toast('<strong>Well done! </strong> The travel is modified correctly.', 2000,'green');
                    $window.location.href = '/#/detailsOfTravel/' + $scope.id;
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