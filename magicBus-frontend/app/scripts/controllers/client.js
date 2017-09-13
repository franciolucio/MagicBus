'use strict';

angular.module('magicBus')
    .controller('ClientCtrl', function ($scope, userService,apiService, clientService) {

        $scope.conductor = {};


        apiService.getProfile().then(function (response) {
            $scope.conductor = clientService.get();
        }, function (error) {
            console.log("conection error");
        });

        clientService.clear();

        $scope.createConductor = function () {
            clientService.save($scope.conductor);
        }
});
        /*$scope.createClient = function () {
        	 Materialize.toast('Se creo el cliente correctamente', 2000);
            };*/
