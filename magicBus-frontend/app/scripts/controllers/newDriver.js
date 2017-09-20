'use strict';

angular.module('magicBus')
    .controller('NewDriverCtrl', function ($scope, newDriverService) {

        $scope.driver = {};

        newDriverService.clear();

        $scope.createNewDriver = function () {
            newDriverService.save($scope.driver);
        }
});