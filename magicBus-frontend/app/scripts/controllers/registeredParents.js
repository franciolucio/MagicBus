'use strict';

angular.module('magicBus')
    .controller('RegisteredParentsCtrl', function ($scope, apiService) {

        $scope.registeredParents = {};

        apiService.getRegisteredParents().
        	then(function (response) {
            	$scope.registeredParents = response.data;
        	}, function (error) {
            console.log("conection error");
        });
});