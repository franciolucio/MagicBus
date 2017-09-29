'use strict';

angular.module('magicBus')
    .controller('NewTravelCtrl', function ($scope, travelService, driverService) {

        $scope.travel = {};
        $scope.drivers = {};

        travelService.clear();
        driverService.clear();

        driverService.getDrivers().
            then(function (response) {
                $scope.drivers = response.data;
            }, function (error) {
            Materialize.toast('<strong>Ups!</strong> Drivers could not be obtained.', 4000,'red');
        });

        $scope.drivers = driverService.getDrivers();

		$scope.createNewTravel = function () {
            travelService.save($scope.travel);
        }
});