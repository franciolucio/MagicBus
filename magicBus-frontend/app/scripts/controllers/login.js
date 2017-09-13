'use strict';

angular.module('magicBus')
    .controller('LoginCtrl', function ($scope, $rootScope, userService, socialLoginService, apiService, $window, $location) {

        $scope.signedIn = {value: false};

        userService.logOut();
       
        $rootScope.$on('event:social-sign-in-success', function (event, userDetails) {
            userService.setUser(userDetails);
            apiService.logIn().then(function (response) {
                apiService.getProfile().then(function (response) {
                    userService.setProfile(response.data);
                })

                $window.location.href = '/#/main';
            },
                function (error) {
                    $window.location.href = '/#/settings';
                });
        })

        $scope.signout = function () {
            socialLoginService.logout();
        }

        $scope.$on('event:social-sign-in-success', (event, userDetails) => {
            $scope.signedIn.value = true;
            $scope.result = userDetails;
            $scope.$apply();
        })

        $scope.logout = function () {
          $scope.signedIn.value = false;
        };

    });