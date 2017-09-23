'use strict';

angular.module('magicBus')
    .controller('NewChildCtrl', function ($scope, newChildService) {

        $scope.child = {};

        newChildService.clear();

        $scope.createNewChild = function () {
        	//$scope.child.latitude = 0000;
        	//$scope.child.longitude = 1111;
            newChildService.save($scope.child);
        }
});