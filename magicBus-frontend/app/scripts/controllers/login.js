'use strict';

angular.module('magicBus')
    .controller('LoginCtrl', function ($scope, $rootScope, userService, socialLoginService, parentService, $window, $location) {

        $scope.signedIn = {value: false};

        /*userService.logOut();*/
       
        $rootScope.$on('event:social-sign-in-success', function (event, userDetails) {
            userService.setUser(userDetails);
            parentService.logIn().then(function (response) {
                userService.setProfile(response.data);
                $window.location.href = '/#/profile';
            },
            function (error) {
                Materialize.toast('<strong>Ups!</strong> Can not enter the site.', 4000,'red');
            });
        })

        $scope.signout  = function () {
            socialLoginService.logout();
        }

        $scope.$on('event:social-sign-in-success', (event, userDetails) => {
            $scope.signedIn.value = true;
            $scope.result = userDetails;
            $scope.$apply();
        })

        $scope.$on('event:social-sign-out-success', function(event, userDetails){
            $scope.signedIn.value = false;
            $scope.result = userDetails;
        })

        $('.button-collapse').sideNav({
            menuWidth: 300 // Closes side-nav on <a> clicks, useful for Angular/Meteor
        });
        
        $('.collapsible').collapsible();

    });