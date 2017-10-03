'use strict';

angular.module('magicBus')
    .controller('DetailsOfDriverCtrl', function ($scope,$routeParams, $window) {
    
    $scope.id = $routeParams.idDriver;
});