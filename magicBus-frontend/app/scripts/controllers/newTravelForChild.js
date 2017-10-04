'use strict';

angular.module('magicBus')
    .controller('NewTravelForChildCtrl', function ($scope, userService, parentService, travelService) {

    	$scope.registeredChilds = {};
    	$scope.id = userService.getId();;
    	$scope.pendingTravels = {};
    	$scope.childIDSelected = {};
    	$scope.travelIDSelected = {};
        $scope.date = new Date();

        $scope.dateSelected = function () {
            travelService.getPendingTravelsForADate($scope.date).
            	then(function (response) {
                	$scope.pendingTravels = response.data;
            	}, function (error) {
                Materialize.toast('<strong>Ups!</strong> Pending travels could not be obtained.', 4000,'red');
            });
        }

    	parentService.getRegisteredChildsByID($scope.id).
        	then(function (response) {
            	$scope.registeredChilds = response.data;
        	}, function (error) {
            Materialize.toast('<strong>Ups!</strong> Registered Childs could not be obtained.', 4000,'red');
        });

        $scope.chargeTravel = function () {
        	travelService.chargeTravel($scope.travelIDSelected, $scope.childIDSelected).
                then(function (response) {
                    Materialize.toast('<strong>Well done! </strong> The travel is charge correctly.', 2000,'green');
                }, function (error) {
                Materialize.toast('<strong>Ups!</strong> Travel could not be charge.', 4000,'red');
            });
        }
});