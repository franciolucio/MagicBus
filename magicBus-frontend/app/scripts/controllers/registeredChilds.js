'use strict';

angular.module('magicBus')
    .controller('RegisteredChildsCtrl', function ($scope, userService, parentService, $window) {

        $scope.registeredChilds = {};
        $scope.id = userService.getId();

        parentService.getRegisteredChildsByID($scope.id).
        	then(function (response) {
            	$scope.registeredChilds = response.data;
        	}, function (error) {
            Materialize.toast('<strong>Ups!</strong> Registered childs could not be obtained.', 4000,'red');
        });

        $scope.details = function (id) {
            $window.location.href = '/#/detailsOfChild/' + id;
        }
});