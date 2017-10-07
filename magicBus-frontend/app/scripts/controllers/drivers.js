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

       /* $scope.details = function (id) {
            $window.location.href = '/#/detailsOfDriver/' + id;
        }*/

        $scope.modifyDriver = function (id) {
            $window.location.href = '/#/modifyDriver/' + id;
        };

        $scope.deleteDriver = function (id) {
           driverService.deleteDriver(id).
            then(
                function (response) {
                    Materialize.toast('<strong>Well done! </strong> The driver is deleted correctly.', 2000,'green');
                    $window.location.href = '/#/drivers';
                }, 
                function (error) {
                    Materialize.toast('<strong>Ups! </strong> Try again, the driver is not deleted correctly.', 4000,'red');
                }
            );
        };
});