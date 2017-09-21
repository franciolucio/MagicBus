'use strict';

angular.module('magicBus')
    .controller('DriversCtrl', function ($scope, apiService) {

        $scope.drivers = {};

        apiService.getDrivers().
        	then(function (response) {
            	$scope.drivers = response.data;
        	}, function (error) {
            console.log("conection error");
        });
});