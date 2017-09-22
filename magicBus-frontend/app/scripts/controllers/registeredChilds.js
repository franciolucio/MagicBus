'use strict';

angular.module('magicBus')
    .controller('RegisteredChildsCtrl', function ($scope, apiService) {

        $scope.registeredChilds = {};
        $scope.id = 0;

        apiService.getRegisteredChildsByID($scope.id).
        	then(function (response) {
            	$scope.registeredChilds = response.data;
        	}, function (error) {
            console.log("conection error");
        });
});