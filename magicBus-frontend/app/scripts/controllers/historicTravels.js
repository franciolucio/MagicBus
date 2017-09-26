'use strict';

angular.module('magicBus')
    .controller('HistoricTravelsCtrl', function ($scope, travelService) {

        $scope.historicTravels = {};

        travelService.getHistoricTravels().
        	then(function (response) {
            	$scope.historicTravels = response.data;
        	}, function (error) {
            console.log("conection error");
        });
});