'use strict';

angular.module('magicBus')
    .controller('TravelsForChildCtrl', function ($scope, userService, parentService, travelService, $window, $route) {

        $scope.id = userService.getId();;
    	$scope.registeredChilds = {};
        $scope.pendingTravels = {};
        $scope.childIDSelected = 0;

        $scope.getPendingTravelsForAChild = function () {
            travelService.getPendingTravelsForAChild($scope.childIDSelected).
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

        $scope.deleteChildForTravel = function (id) {
           travelService.deleteChildForTravel($scope.childIDSelected, id).
            then(
                function (response) {
                    Materialize.toast('<strong>Well done! </strong> The child is deleted to this travel correctly.', 2000,'green');
                    $route.reload();
                }, 
                function (error) {
                    Materialize.toast('<strong>Ups! </strong> Try again, the child is not deleted correctly.', 4000,'red');
                }
            );
        }   
});