'use strict';

angular.module('magicBus')
    .controller('RegisteredChildsCtrl', function ($scope, userService, parentService) {

        $scope.registeredChilds = {};
        $scope.id = userService.getId();

        parentService.getRegisteredChildsByID($scope.id).
        	then(function (response) {
            	$scope.registeredChilds = response.data;
        	}, function (error) {
            console.log("conection error");
        });
});