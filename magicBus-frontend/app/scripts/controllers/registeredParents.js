'use strict';

angular.module('magicBus')
    .controller('RegisteredParentsCtrl', function ($scope, parentService) {

        $scope.registeredParents = {};

        parentService.getRegisteredParents().
        	then(function (response) {
            	$scope.registeredParents = response.data;
        	}, function (error) {
            console.log("conection error");
        });
});