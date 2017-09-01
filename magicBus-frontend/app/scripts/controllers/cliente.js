'use strict';

angular.module('magicBus').controller("ClientCtrl", ["$scope", "$http", "$log", function($scope, $http, $log){

	function fail(error){
     $log.error('Ocurrio un error: ' + error.data);
     return 'Ocurrio un error';
  }

  function succ(response){
    $scope.clients = response.data;
  }

	$http.get('http://localhost:8080/magicBus-backend/rest/user/allUsers').then(succ).catch(fail);
    
}]);