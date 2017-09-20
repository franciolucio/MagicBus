'use strict';

angular.module('magicBus')
    .controller('HistoricTravelsCtrl', function ($scope, apiService) {

        $scope.historicTravels = {};

        apiService.getHistoricTravels().
        	then(function (response) {
            	$scope.historicTravels = response.data;
        	}, function (error) {
            console.log("conection error");
        });
});