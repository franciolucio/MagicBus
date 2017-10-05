'use strict';

angular.module('magicBus')
    .controller('DetailsOfDriverCtrl', function ($scope, $routeParams, driverService) {
    
    $scope.id = $routeParams.idDriver;
    $scope.driver = {};

    driverService.getDriverById($scope.id).
        then(function (response) {
            $scope.driver = response.data;
        }, function (error) {
        Materialize.toast('<strong>Ups! </strong> The Driver assigned', 4000,'red');
    });

    $scope.modifyDriver = function (id) {

    }

    $scope.deleteDriver = function (id) {

    }
});