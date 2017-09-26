'use strict';

angular.module('magicBus')
    .controller('PendingParentsCtrl', function ($scope, parentService, $route) {

        $scope.pendingParents = {};

        parentService.getPendingParents().
        	then(function (response) {
            	$scope.pendingParents = response.data;
        	}, function (error) {
            console.log("conection error");
        });

        $scope.acceptParent = function (id) {
        	parentService.acceptParent(id);
            $route.reload();
            Materialize.toast('<strong>Well done!</strong> Parent added successfully.', 2000,'green');
        }
});