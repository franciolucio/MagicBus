'use strict';

angular.module('magicBus')
    .controller('ProfileCtrl', function ($scope, userService, apiService, $window) {

        $scope.user = userService.getProfile();

       	$scope.modifyProfile = function () {
            $window.location.href = '/#/modifyProfile';
        }

        $scope.acceptModify = function () {
            apiService.acceptModify($scope.user).
            then(function (response) {
                $window.location.href = '/#/profile';
            }, function (error) {
            console.log("conection error");
        });
        }

        
});