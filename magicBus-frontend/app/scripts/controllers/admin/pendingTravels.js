'use strict';

angular.module('magicBus')
    .controller('PendingTravelsCtrl', function ($scope, travelService,$window,$route) {

        $scope.pendingTravels = {};

        travelService.getPendingTravels().
        	then(function (response) {
            	$scope.pendingTravels = response.data;
        	}, function (error) {
            Materialize.toast('<strong>Ups!</strong> Pending travels could not be obtained.', 4000,'red');
        });

        $scope.details = function (id) {
            $window.location.href = '/#/detailsOfTravel/' + id;
        };

        $scope.deleteTravel = function (id) {
           travelService.deleteTravel(id).
            then(
                function (response) {
                    Materialize.toast('<strong>Well done! </strong> The travel is deleted correctly.', 2000,'green');
                    $route.reload();
                }, 
                function (error) {
                    Materialize.toast('<strong>Ups! </strong> Try again, the travel is not deleted correctly.', 4000,'red');
                }
            );
        };

        $scope.modifyTravel = function (id) {
            $window.location.href = '/#/modifyTravel/' + id;
        };
});