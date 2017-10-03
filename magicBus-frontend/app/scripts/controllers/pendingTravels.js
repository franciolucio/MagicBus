'use strict';

angular.module('magicBus')
    .controller('PendingTravelsCtrl', function ($scope, travelService,$window) {

        $scope.pendingTravels = {};

        travelService.getPendingTravels().
        	then(function (response) {
            	$scope.pendingTravels = response.data;
        	}, function (error) {
            Materialize.toast('<strong>Ups!</strong> Pending travels could not be obtained.', 4000,'red');
        });

        $scope.details = function (id) {
            $window.location.href = '/#/detailsOfTravel/' + id;
        }
});