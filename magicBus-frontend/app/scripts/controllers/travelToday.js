'use strict';

angular.module('magicBus')
    .controller('TravelTodayCtrl', function ($scope, travelService,$window) {

        $scope.pendingTravels = {};

        var today = new Date();

        travelService.getPendingTravelsForADate(today).
        	then(function (response) {
            	$scope.pendingTravels = response.data;
        	}, function (error) {
            Materialize.toast('<strong>Ups!</strong> Pending travels could not be obtained.', 4000,'red');
        });

        $scope.details = function (id) {
            $window.location.href = '/#/detailsOfTravelToday/' + id;
        }
});