'use strict';

angular.module('magicBus')
    .controller('ProfileCtrl', function ($scope, userService, parentService, $window) {

        $scope.parent = userService.getProfile();

       	$scope.modifyProfile = function () {
            $window.location.href = '/#/modifyProfile';
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