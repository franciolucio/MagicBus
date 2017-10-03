'use strict';

angular.module('magicBus')
    .controller('DetailsOfChildCtrl', function ($scope, childService, travelService, $routeParams, $window) {

        $scope.id = $routeParams.idChild;
        $scope.child = {};
        $scope.pendingTravels = {};

        $scope.modifyProfile = function () {
            $window.location.href = '/#/modifyProfileOfChild/' + $scope.id;
        }

        $scope.acceptModifyOfChild = function () {
           childService.acceptModifyOfChild($scope.child).
            then(
                function (response) {
                    Materialize.toast('<strong>Well done! </strong> The profile is modified correctly.', 2000,'green');
                    $window.location.href = '/#/detailsOfChild/' + $scope.id;
                }, 
                function (error) {
                    Materialize.toast('<strong>Ups! </strong> Try again, the profile is not modified correctly.', 4000,'red');
                }
            );
        }

        $scope.deleteChild = function () {
           childService.deleteChild($scope.id).
            then(
                function (response) {
                    Materialize.toast('<strong>Well done! </strong> The profile is deleted correctly.', 2000,'green');
                    $window.location.href = '/#/registeredChilds';
                }, 
                function (error) {
                    Materialize.toast('<strong>Ups! </strong> Try again, the profile is not deleted correctly.', 4000,'red');
                }
            );
        }        

        travelService.getPendingTravelsForAChild($scope.id).
            then(function (response) {
                $scope.pendingTravels = response.data;
            }, function (error) {
            console.log("conection error");
        });

        childService.getChildByID($scope.id).
        then(function (response) {
                $scope.child = response.data;
            }, function (error) {
            console.log("conection error");
        });
});