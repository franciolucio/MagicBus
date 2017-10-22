'use strict';

angular.module('magicBus')
    .controller('ModifyDriverCtrl', function ($scope, driverService, $window, $routeParams) {

        $scope.driver = {};
        $scope.drivers = {};
        $scope.id = $routeParams.idDriver;

        driverService.getDriverById($scope.id).
        	then(function (response) {
            	$scope.driver = response.data;
        	}, function (error) {
            Materialize.toast('<strong>Ups!</strong> Driver could not be obtained.', 4000,'red');
        });

        $scope.acceptModifyDriver = function (id) {
           driverService.acceptModifyDriver($scope.driver).
            then(
                function (response) {
                    Materialize.toast('<strong>Well done! </strong> The driver is modified correctly.', 2000,'green');
                    $window.location.href = '/#/drivers/';
                }, 
                function (error) {
                    Materialize.toast('<strong>Ups! </strong> Try again, the driver is not modified correctly.', 4000,'red');
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