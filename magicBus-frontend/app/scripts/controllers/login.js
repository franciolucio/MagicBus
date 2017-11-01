'use strict';

angular.module('magicBus')
    .controller('LoginCtrl', function ($scope, $rootScope, userService, socialLoginService, parentService, $window, $location, $filter) {

        $scope.signedIn = {value: false};
        $scope.user = null;

        /*userService.logOut();*/
       
        $rootScope.$on('event:social-sign-in-success', function (event, userDetails) {
            userService.setUser(userDetails);
            parentService.logIn().then(function (response) {
                $scope.user = response.data;
                userService.setProfile(response.data);
                $window.location.href = '/#/profile';
            },
            function (error) {
                Materialize.toast($filter('translate')('Ups! Can not enter the site'), 4000,'red');
            });
        })

        $scope.signout  = function () {
            $scope.signedIn.value = false;
            $scope.user = null;
            socialLoginService.logout();

        }

        $scope.$on('event:social-sign-in-success', (event, userDetails) => {
            $scope.signedIn.value = true;
            $scope.result = userDetails;
            $scope.$apply();
        })

        $('.button-collapse').sideNav({
            menuWidth: 300 // Closes side-nav on <a> clicks, useful for Angular/Meteor
        });
        
        $('.collapsible').collapsible();

    });