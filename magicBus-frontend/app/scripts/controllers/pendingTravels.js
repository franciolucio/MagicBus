'use strict';

angular.module('magicBus')
    .controller('PendingTravelsCtrl', function ($scope, apiService) {

        $scope.pendingTravels = {};

        apiService.getPendingTravels().
        	then(function (response) {
            	$scope.pendingTravels = response.data;
        	}, function (error) {
            console.log("conection error");
        });
});