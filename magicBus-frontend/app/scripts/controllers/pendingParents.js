'use strict';

angular.module('magicBus')
    .controller('PendingParentsCtrl', function ($scope, apiService) {

        $scope.pendingParents = {};

        apiService.getPendingParents().
        	then(function (response) {
            	$scope.pendingParents = response.data;
        	}, function (error) {
            console.log("conection error");
        });

        $scope.accept = function () {
        	
        }
});