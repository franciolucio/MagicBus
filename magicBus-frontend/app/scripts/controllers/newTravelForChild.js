'use strict';

angular.module('magicBus')
    .controller('NewTravelForChildCtrl', function ($scope, userService, parentService, travelService) {

    	$scope.registeredChilds = {};
    	$scope.id = userService.getId();;
    	$scope.pendingTravels = {};
    	$scope.childSelected = {};
    	$scope.travelSelected = {};

        travelService.getPendingTravels().
        	then(function (response) {
            	$scope.pendingTravels = response.data;
        	}, function (error) {
            console.log("conection error");
        });

    	parentService.getRegisteredChildsByID($scope.id).
        	then(function (response) {
            	$scope.registeredChilds = response.data;
        	}, function (error) {
            console.log("conection error");
        });

        $scope.chargeTravel = function () {
        	
        }
});