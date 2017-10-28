'use strict';

angular.module('magicBus')
    .controller('RegisteredParentsCtrl', function ($scope, parentService, $window, $route) {

        $scope.registeredParents = {};

        parentService.getRegisteredParents().
        	then(function (response) {
            	$scope.registeredParents = response.data;
        	}, function (error) {
            Materialize.toast('<strong>Ups!</strong> Registered parents could not be obtained.', 4000,'red');
        });

       $scope.deleteParent = function (id) {
           parentService.deleteParent(id).
            then(
                function (response) {
                    Materialize.toast('<strong>Well done! </strong> The Parent is deleted correctly.', 2000,'green');
                    $route.reload();;
                }, 
                function (error) {
                    Materialize.toast('<strong>Ups! </strong> Try again, the parent is not deleted correctly.', 4000,'red');
                }
            );
        }  
});