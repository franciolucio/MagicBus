'use strict';

angular.module('magicBus')
    .controller('NewChildCtrl', function ($scope, newChildService) {

        $scope.child = {};

        newChildService.clear();

        $scope.createNewChild = function () {
            newChildService.save($scope.child);
        }
});