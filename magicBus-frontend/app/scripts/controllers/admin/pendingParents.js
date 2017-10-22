'use strict';

angular.module('magicBus')
    .controller('PendingParentsCtrl', function ($scope, parentService, $route,$window) {

        $scope.pendingParents = {};

        parentService.getPendingParents().
        	then(function (response) {
            	$scope.pendingParents = response.data;
        	}, function (error) {
            Materialize.toast('<strong>Ups!</strong> Pending parents could not be obtained.', 4000,'red');
        });

        $scope.acceptParent = function (id) {
        	parentService.acceptParent(id);
            $window.location.href = '/#/registeredParents';
            Materialize.toast('<strong>Well done!</strong> Parent added successfully.', 2000,'green');
        }
});