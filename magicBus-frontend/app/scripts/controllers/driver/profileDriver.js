'use strict';

angular.module('magicBus')
    .controller('ProfileDriverCtrl', function ($scope, userService) {

        $scope.driver = userService.getProfile();
  });