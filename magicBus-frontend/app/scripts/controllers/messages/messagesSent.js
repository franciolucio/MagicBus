'use strict';

angular.module('magicBus')
    .controller('MessagesSentCtrl', function ($scope) {


    	function getPublicMessages(){
        $http.get($scope.userUrl + $routeParams.id + "/publicMessages")
            .success(function(data){
                $scope.publicMessages = data;
                $scope.totalItems = $scope.publicMessages.length;
                $scope.publicMessagesPageChanged();
        });
    };


    	$scope.sendPublicMessage = function(){
        $http.post($scope.userUrl + $rootScope.user.id + "/sendPublicMessage/" + $scope.user.id,
                    $scope.newPublicMessage)
            .success(function(data){
                $scope.newPublicMessage = "";
                getPublicMessages();
        });
    };


});