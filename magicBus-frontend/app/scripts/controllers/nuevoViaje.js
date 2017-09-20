'use strict';

angular.module('magicBus')
    .controller('NuevoViajeCtrl', function ($scope,apiService, nuevoViajeService) {

        $scope.viaje = {};

        nuevoViajeService.clear();

        $scope.createViaje = function () {
            nuevoViajeService.save($scope.viaje);
        }
});