'use strict';

angular.module('magicBus')
    .controller('NewTravelForChildCtrl', function ($scope, userService, parentService, travelService, $filter) {

    	$scope.registeredChilds = {};
    	$scope.id = userService.getId();;
    	$scope.pendingTravels = {};
    	$scope.childIDSelected = 0;
    	$scope.travelIDSelected = {};
        $scope.date = new Date();
        $scope.selected = "-";

        $scope.dateSelected = function () {
            travelService.getPendingTravelsForEspecificDate($scope.date).
            	then(function (response) {
                	$scope.pendingTravels = response.data;
            	}, function (error) {
                Materialize.toast($filter('translate')('<strong>Ups!</strong> Pending travels could not be obtained.'), 4000,'red');
            });
        }

    	parentService.getRegisteredChildsByID($scope.id).
        	then(function (response) {
            	$scope.registeredChilds = response.data;
        	}, function (error) {
            Materialize.toast($filter('translate')('<strong>Ups!</strong> Registered Childs could not be obtained.'), 4000,'red');
        });

        $scope.selectChild = function (child) {
            alert("hola")
            $scope.childIDSelected = child.id;
            $scope.selected = child.surname + " " + child.name;
        };

        $scope.chargeTravel = function (idTravel) {
        	travelService.chargeTravel(idTravel, $scope.childIDSelected).
                then(function (response) {
                    Materialize.toast($filter('translate')('<strong>Well done! </strong> The travel is charge correctly.'), 2000,'green');
                }, function (error) {
                Materialize.toast($filter('translate')('<strong>Ups!</strong> The travel can not be charged, because the son has been charged for this travel.'), 4000,'red');
            });
        }
});