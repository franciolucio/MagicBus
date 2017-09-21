'use strict';

angular.module('magicBus')
    .controller('ProfileCtrl', function ($scope, apiService) {

        $scope.id = 0;
        $scope.user = {};

        apiService.getUserByID($scope.id).
        	then(function (response) {
            	$scope.user = response.data;
        	}, function (error) {
            console.log("conection error");
        });

       	$scope.modifyProfile = function () {
            //MODIFICAR PERFIL
        }
});