'use strict';

angular.module('magicBus')
    .controller('TravelsForChildCtrl', function ($scope, userService, parentService, travelService, $window, $route , $filter, $translate) {

        $scope.id = userService.getId();;
    	$scope.registeredChilds = {};
        $scope.pendingTravelsForAChild = {};
        $scope.pendingTravelsForChilds = {};
        $scope.childIDSelected = 0;
        $scope.showTable = {value: true};

        $scope.getPendingTravelsForAChild = function (id) {
            $scope.showTable.value = true;
            $scope.childIDSelected = id;
            travelService.getPendingTravelsForAChild(id).
                then(function (response) {
                    $scope.pendingTravelsForAChild = response.data;
                }, function (error) {
                Materialize.toast($filter('translate')('<strong>Ups!</strong> Pending travels could not be obtained.'), 4000,'red');
            });
        }

        $scope.getPendingTravelsForAllChilds = function () {
            $scope.showTable.value = false;
            travelService.getPendingTravelsForAllChilds($scope.id).
                then(function (response) {
                    $scope.pendingTravelsForChilds = response.data;
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

        $scope.deleteChildForTravel = function (id) {
           travelService.deleteChildForTravel($scope.childIDSelected, id).
            then(
                function (response) {
                    Materialize.toast($filter('translate')('<strong>Well done! </strong> The child is deleted to this travel correctly.'), 2000,'green');
                    $route.reload();
                }, 
                function (error) {
                    Materialize.toast($filter('translate')('<strong>Ups! </strong> Try again, the child is not deleted correctly.'), 4000,'red');
                }
            );
        }  
});