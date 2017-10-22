'use strict';

angular.module('magicBus')
    .controller('NewDriverCtrl', function ($scope, driverService) {

        $scope.driver = {};

        driverService.clear();

        $scope.createNewDriver = function () {
            driverService.save($scope.driver);
            Materialize.toast('<strong>Well done! </strong> The driver is created correctly.', 2000,'green');
        }
});