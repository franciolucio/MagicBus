'use strict';

angular.module('magicBus')
    .controller('DetailsOfTravelTodayParentCtrl', function ($scope, parentService, travelService, mapService, $routeParams, $route, $filter) {
       
        $scope.idTravel = $routeParams.idTravel;
        $scope.idParent = $routeParams.idParent;
        $scope.childsOfTravel = {};
        $scope.messages = {};
        $scope.content = "";
        $scope.idChild = $routeParams.idChild;

        travelService.getChildsOfTravel($scope.idTravel).
            then(function (response) {
                $scope.childsOfTravel = response.data;
            }, function (error) {
            Materialize.toast($filter('translate')('<strong>Ups! </strong> This travel has not kids assigned'), 4000,'red');
        });

        travelService.getMessagesOfTravel($scope.idTravel).
            then(function (response) {
                $scope.messages = response.data;
            }, function (error) {
            Materialize.toast($filter('translate')('<strong>Ups! </strong> This travel has not Messages assigned'), 4000,'red');
        });

        $scope.send = function () {
            parentService.sendMessage($scope.idParent, $scope.idChild, $scope.idTravel, $scope.content).
                then(
                    function (response) {
                        Materialize.toast($filter('translate')('MessagelOK'), 2000,'green');
                        $route.reload();
                    }, 
                    function (error) {
                        Materialize.toast($filter('translate')('MessageWRONG'), 4000,'red');
                    }
                );
        },
        
        $scope.initialize = function () {
            mapService.initMap($scope.childsOfTravel);
        }
        
        setTimeout(function(){$scope.initialize();}, 500);

        //Pone el scroll al final del div que contiene el chat, asi se puede leer el ultimo mensaje que se envio
        $("#div1").animate({scrollTop: 1000000}, 1000);
});