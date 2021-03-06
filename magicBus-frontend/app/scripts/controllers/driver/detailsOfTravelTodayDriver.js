'use strict';

angular.module('magicBus')
    .controller('DetailsOfTravelTodayDriverCtrl', function ($scope, travelService, driverService, mapService, $routeParams, $route, $filter) {

        $scope.idTravel = $routeParams.idTravel;
        $scope.idDriver = $routeParams.idDriver;
        $scope.childsOfTravel = {};
        $scope.messages = {};
        $scope.content = "";
        $scope.init = false;
        $scope.finish = false;
        $scope.travel = {};

        travelService.getTravelById($scope.idTravel).
            then(function (response) {
                $scope.travel = response.data;
            }, function (error) {
            Materialize.toast($filter('translate')('<strong>Ups!</strong> Pending travels could not be obtained.'), 4000,'red');
        });
       
        travelService.getChildsOfTravel($scope.idTravel).
            then(function (response) {
                $scope.childsOfTravel = response.data;
            }, function (error) {
            Materialize.toast($filter('translate')('<strong>Ups! </strong> This travel has not kids assigned'), 4000,'red');
        });

        travelService.getInitOfTravel($scope.idTravel).
            then(function (response) {
                $scope.init = response.data;
            }, function (error) {
            Materialize.toast($filter('translate')('initTravelWRONG'), 4000,'red');
        });

        travelService.getFinishOfTravel($scope.idTravel).
            then(function (response) {
                $scope.finish = response.data;
            }, function (error) {
            Materialize.toast($filter('translate')('<strong>Ups! </strong> This travel has not kids assigned'), 4000,'red');
        });

        travelService.getMessagesOfTravel($scope.idTravel).
            then(function (response) {
                $scope.messages = response.data;
            }, function (error) {
            Materialize.toast($filter('translate')('<strong>Ups! </strong> This travel has not Messages assigned'), 4000,'red');
        });

        $scope.carry = function (surname, name, idChild) {
            var bodyOfMessage =  surname + ' ' + name + $filter('translate')('carryChild');
            var childs = JSON.stringify($scope.childsOfTravel);
            travelService.saveAssist(childs, $scope.idTravel).
                then(
                    function (response) {
                        Materialize.toast($filter('translate')('<strong>Well done! </strong> The travel is save correctly.'), 2000,'green');
                            driverService.sendMessageChild($scope.idDriver, $scope.idTravel, bodyOfMessage,idChild).
                            then(
                                function (response) {}, 
                                function (error) {
                                    Materialize.toast($filter('translate')('<strong>Ups! </strong> Try again, the travel is not save correctly.'), 4000,'red');
                                                        }
                            );
                        $route.reload();
                    }, 
                    function (error) {
                        Materialize.toast($filter('translate')('<strong>Ups! </strong> Try again, the travel is not save correctly.'), 4000,'red');
                    }
                );
        },

        $scope.initTravel = function () {
            var bodyOfMessage = $filter('translate')('initTrip');
            driverService.sendMessage($scope.idDriver, $scope.idTravel, bodyOfMessage).
                then(
                    function (response) {
                        Materialize.toast($filter('translate')('initTravelOK'), 2000,'green');
                        travelService.initTrue($scope.idTravel).
                            then(
                                function (response) {
                                    $route.reload();
                                }, 
                                function (error) {
                                    Materialize.toast($filter('translate')('initTravelWRONG'), 4000,'red');
                                }
                            );
                    }, 
                    function (error) {
                        Materialize.toast($filter('translate')('initTravelWRONG'), 4000,'red');
                    }
                );
        },

        $scope.finishTravel = function () {
            var bodyOfMessage = $filter('translate')('finishTrip');
            driverService.sendMessage($scope.idDriver, $scope.idTravel, bodyOfMessage).
                then(
                    function (response) {
                        Materialize.toast($filter('translate')('initTravelOK'), 2000,'green');
                        travelService.finishTrue($scope.idTravel).
                            then(
                                function (response) {
                                    $route.reload();
                                }, 
                                function (error) {
                                    Materialize.toast($filter('translate')('initTravelWRONG'), 4000,'red');
                                }
                            );
                    }, 
                    function (error) {
                        Materialize.toast($filter('translate')('initTravelWRONG'), 4000,'red');
                    }
                );
        },

        $scope.send = function () {
            driverService.sendMessage($scope.idDriver, $scope.idTravel, $scope.content).
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
            mapService.initMap($scope.childsOfTravel,$scope.travel);
        }
        
        setTimeout(function(){$scope.initialize();}, 500);

        //Pone el scroll al final del div que contiene el chat, asi se puede leer el ultimo mensaje que se envio
        $("#div1").animate({scrollTop: 1000000}, 1000);
});