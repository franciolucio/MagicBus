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
            var place = $scope.places.getPlace();
            $scope.driver.latitude = place.geometry.location.lat();
            $scope.driver.longitude = place.geometry.location.lng();
            $scope.driver.address = place.formatted_address;
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

        $scope.places = new google.maps.places.Autocomplete(document.getElementById('txtPlaces'));

        google.maps.event.addListener($scope.places, 'place_changed', function () {

        });
});