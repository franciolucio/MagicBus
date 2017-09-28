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

        $scope.modifyProfile = function () {
            $window.location.href = '/#/modifyProfileOfChild';
        }

        $scope.acceptModify = function () {
           parentService.acceptModify($scope.parent).
            then(function (response) {
                Materialize.toast('<strong>Well done! </strong> The profile is modified correctly.', 2000,'green');
                $window.location.href = '/#/profile';
            }, function (error) {
             Materialize.toast('<strong>Ups! </strong> Try again, the profile is not modified correctly.', 4000,'red');
        });
        }
});