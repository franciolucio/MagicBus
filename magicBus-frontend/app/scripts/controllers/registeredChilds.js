'use strict';

angular.module('magicBus')
    .controller('RegisteredChildsCtrl', function ($scope, userService, apiService) {

        $scope.registeredChilds = {};
        $scope.id = userService.getId();

        apiService.getRegisteredChildsByID($scope.id).
        	then(function (response) {
            	$scope.registeredChilds = response.data;
        	}, function (error) {
            console.log("conection error");
        });
});