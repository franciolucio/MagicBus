'use strict';

angular.module('magicBus')
    .controller('ModifyProfileOfChildCtrl', function ($scope, userService, parentService) {

        $scope.acceptModify = function () {
           parentService.acceptModify($scope.parent).
            then(function (response) {
                Materialize.toast('<strong>Well done! </strong> The profile is modified correctly.', 2000,'green');
                $window.location.href = '/#/profile';
            }, function (error) {
             Materialize.toast('<strong>Ups! </strong> Try again, the profile is not modified correctly.', 4000,'red');
        });
        }
});