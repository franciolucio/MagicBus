'use strict';

angular.module('magicBus')
    .controller('PendingTravelsCtrl', function ($scope, travelService) {

        $scope.pendingTravels = {};

        travelService.getPendingTravels().
        	then(function (response) {
            	$scope.pendingTravels = response.data;
        	}, function (error) {
            console.log("conection error");
        });
});