'use strict';

angular.module('magicBus')
    .controller('TravelTodayCtrl', function ($scope, userService, travelService, $window, $filter) {

        $scope.pendingTravels = {};
        $scope.idDriver = userService.getId();

        var today = new Date();

        travelService.getPendingTravelsForADate(today, $scope.idDriver).
        	then(function (response) {
            	$scope.pendingTravels = response.data;
        	}, function (error) {
            Materialize.toast($filter('translate')('<strong>Ups!</strong> Pending travels could not be obtained.'), 4000,'red');
        });

        $scope.details = function (idTravel) {
            $window.location.href = '/#/detailsOfTravelTodayDriver/' + idTravel + '/' + $scope.idDriver;
        }
});