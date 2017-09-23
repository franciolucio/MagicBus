'use strict';

angular.module('magicBus')
    .controller('ProfileCtrl', function ($scope, apiService, $window) {

        $scope.id = apiService.getUserID();
        $scope.user = {};

        apiService.getUserByID($scope.id).
        	then(function (response) {
            	$scope.user = response.data;
        	}, function (error) {
            console.log("conection error");
        });

       	$scope.modifyProfile = function () {
            $window.location.href = '/#/modifyProfile';
        }

        apiService.acceptModify($scope.id, $scope.user).
            then(function (response) {
                $window.location.href = '/#/profile';
            }, function (error) {
            console.log("conection error");
        });
});