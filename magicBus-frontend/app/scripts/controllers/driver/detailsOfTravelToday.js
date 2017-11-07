'use strict';

angular.module('magicBus')
    .controller('DetailsOfTravelTodayCtrl', function ($scope, travelService, mapService, $routeParams, $window , $filter) {

        $scope.id = $routeParams.idTravel;
        $scope.childsOfTravel = {};
       
        travelService.getChildsOfTravel($scope.id).
            then(function (response) {
                $scope.childsOfTravel = response.data;
            }, function (error) {
            Materialize.toast($filter('translate')('<strong>Ups! </strong> This travel has not kids assigned'), 4000,'red');
        });

        $scope.save = function () {
            var childs = JSON.stringify($scope.childsOfTravel);
            travelService.saveAssist(childs, $scope.id).
                then(
                    function (response) {
                        Materialize.toast($filter('translate')('<strong>Well done! </strong> The travel is save correctly.'), 2000,'green');
                        $window.location.href = '/#/travelToday/';
                    }, 
                    function (error) {
                        Materialize.toast($filter('translate')('<strong>Ups! </strong> Try again, the travel is not save correctly.'), 4000,'red');
                    }
                );
        },
        
        $scope.initialize = function () {
            mapService.initMap($scope.childsOfTravel);
        }
        
        setTimeout(function(){$scope.initialize();}, 500);
});