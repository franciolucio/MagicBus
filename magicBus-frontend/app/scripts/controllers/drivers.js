'use strict';

angular.module('magicBus')
    .controller('DriversCtrl', function ($scope, driverService, $window) {

        $scope.drivers = {};

        driverService.getDrivers().
        	then(function (response) {
            	$scope.drivers = response.data;
        	}, function (error) {
            Materialize.toast('<strong>Ups!</strong> Drivers could not be obtained.', 4000,'red');
        });

        $scope.details = function (id) {
            $window.location.href = '/#/detailsOfDriver/' + id;
        }
});