'use strict';

angular.module('magicBus')
    .controller('PendingParentsCtrl', function ($scope, parentService, $route) {

        $scope.pendingParents = {};

        parentService.getPendingParents().
        	then(function (response) {
            	$scope.pendingParents = response.data;
        	}, function (error) {
            Materialize.toast('<strong>Ups!</strong> Pending parents could not be obtained.', 4000,'red');
        });

        $scope.acceptParent = function (id) {
        	parentService.acceptParent(id);
            $route.reload();
            Materialize.toast('<strong>Well done!</strong> Parent added successfully.', 2000,'green');
        }
});