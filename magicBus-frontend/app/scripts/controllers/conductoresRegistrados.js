'use strict';

angular.module('magicBus')
    .controller('ConductoresRegistradosCtrl', function ($scope, apiService) {

        $scope.conductores = {};


        apiService.getDrivers().then(function (response) {
            $scope.conductores = response.data;
        }, function (error) {
            console.log("conection error");
        });
});