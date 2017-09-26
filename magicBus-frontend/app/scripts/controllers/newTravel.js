'use strict';

angular.module('magicBus')
    .controller('NewTravelCtrl', function ($scope, travelService/*,driverService*/) {

        $scope.travel = {};

        travelService.clear();

        /*$scope.drivers = driverService.getDrivers().name;*/
        $scope.drivers = [
            "Driver01",
            "Driver02",
            "Driver03"
        ];

		$scope.createNewTravel = function () {
            travelService.save($scope.travel);
        }
});