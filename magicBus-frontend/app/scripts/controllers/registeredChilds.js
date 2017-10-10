'use strict';

angular.module('magicBus')
    .controller('RegisteredChildsCtrl', function ($scope, userService, parentService, childService, $window) {

        $scope.registeredChilds = {};
        $scope.id = userService.getId();

        parentService.getRegisteredChildsByID($scope.id).
        	then(function (response) {
            	$scope.registeredChilds = response.data;
        	}, function (error) {
            Materialize.toast('<strong>Ups!</strong> Registered childs could not be obtained.', 4000,'red');
        });

        $scope.modifyChild = function (id) {
            $window.location.href = '/#/modifyChild/' + id;
        };

        $scope.deleteChild = function (id) {
           childService.deleteChild(id).
            then(
                function (response) {
                    Materialize.toast('<strong>Well done! </strong> The child is deleted correctly.', 2000,'green');
                    $window.location.href = '/#/registeredChilds';
                }, 
                function (error) {
                    Materialize.toast('<strong>Ups! </strong> Try again, the child is not deleted correctly.', 4000,'red');
                }
            );
        };
});