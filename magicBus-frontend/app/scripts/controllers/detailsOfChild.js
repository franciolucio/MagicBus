'use strict';

angular.module('magicBus')
    .controller('DetailsOfChildCtrl', function ($scope, childService, parentService, travelService, $routeParams) {

        $scope.id = $routeParams.idChild;
        $scope.child = childService.getChildByID($scope.id);
        $scope.pendingTravels = {};
        

        $scope.modifyProfile = function () {
            $window.location.href = '/#/modifyProfileOfChild';
        }

        $scope.acceptModify = function () {
           parentService.acceptModify($scope.parent).
            then(
                function (response) {
                    Materialize.toast('<strong>Well done! </strong> The profile is modified correctly.', 2000,'green');
                    $window.location.href = '/#/profile';
                }, 
                function (error) {
                    Materialize.toast('<strong>Ups! </strong> Try again, the profile is not modified correctly.', 4000,'red');
                }
            );
        }

        travelService.getPendingTravelsForAChild($scope.id).
            then(function (response) {
                $scope.pendingTravels = response.data;
            }, function (error) {
            console.log("conection error");
        });
});