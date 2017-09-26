'use strict';

angular.module('magicBus')
    .controller('NewDriverCtrl', function ($scope, driverService) {

        $scope.driver = {};

        driverService.clear();

        $scope.createNewDriver = function () {
            driverService.save($scope.driver);
        }
});