'use strict';

angular.module('magicBus')
    .controller('RegisteredChildsCtrl', function ($scope, apiService) {

        $scope.registeredChilds = {};
        $scope.id = apiService.getUserID();

        apiService.getRegisteredChildsByID($scope.id).
        	then(function (response) {
            	$scope.registeredChilds = response.data;
        	}, function (error) {
            console.log("conection error");
        });
});