'use strict';

angular.module('magicBus')
    .controller('NewTravelCtrl', function ($scope, newTravelService) {

        $scope.travel = {};

        newTravelService.clear();

        $scope.createNewTravel = function () {
            newTravelService.save($scope.travel);
        }
});