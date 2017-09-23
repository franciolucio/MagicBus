'use strict';

angular.module('magicBus')
    .controller('PendingParentsCtrl', function ($scope, apiService, $route) {

        $scope.pendingParents = {};

        apiService.getPendingParents().
        	then(function (response) {
            	$scope.pendingParents = response.data;
        	}, function (error) {
            console.log("conection error");
        });

        $scope.acceptParent = function (id) {
        	apiService.acceptParent(id);
            $route.reload();
            Materialize.toast('<strong>Well done!</strong> Parent added successfully.', 2000);
        }
});