'use strict';

angular.module('magicBus')
    .controller('HistoricTravelsCtrl', function ($scope, travelService,$window) {

        $scope.historicTravels = {};

        travelService.getHistoricTravels().
        	then(function (response) {
            	$scope.historicTravels = response.data;
        	}, function (error) {
            Materialize.toast('<strong>Ups!</strong> Historical travels could not be obtained.', 4000,'red');
        });

        $scope.details = function (id) {
            $window.location.href = '/#/detailsOfTravel/' + id;
        };
});