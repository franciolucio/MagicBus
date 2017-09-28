'use strict';

angular.module('magicBus')
    .controller('RegisteredParentsCtrl', function ($scope, parentService) {

        $scope.registeredParents = {};

        parentService.getRegisteredParents().
        	then(function (response) {
            	$scope.registeredParents = response.data;
        	}, function (error) {
            Materialize.toast('<strong>Ups!</strong> Registered parents could not be obtained.', 4000,'red');
        });
});