'use strict';

angular.module('magicBus')
    .controller('MapCtrl', function ($scope,$window, $location,apiService) {

/*	function fail(error){
      $log.error('Ocurrio un error: ' + error.data);
      return 'Ocurrio un error';
    }

    function succ(response){
      $scope.clients = response.data;
    }

	$http.get('http://localhost:8080/magicBus-backend/rest/user/allUsers').then(succ).catch(fail);*/

  apiService.getUsers().then(function (response) {
            $scope.clients = response.data;
        }, function (error) {
            console.log("conection error");
        });

  $scope.initialize = function() {
      
      var map = new google.maps.Map(document.getElementById('mapa'), {
        zoom: 14,
        center: new google.maps.LatLng(-34.720634 , -58.254605), //Centrado en Quilmes
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
      
      var infowindow = new google.maps.InfoWindow();

      var marker, i;
      for (i = 0; i < $scope.clients.length; i++) {
      	marker = new google.maps.Marker({
          position: new google.maps.LatLng($scope.clients[i].latitude, $scope.clients[i].longitude),
          map: map,
          icon: $scope.clients[i].image,
          draggable: true,
          animation: google.maps.Animation.DROP
        });
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
          return function() {
            infowindow.setContent($scope.clients[i].surname + ", " + $scope.clients[i].name + '<br>' + $scope.clients[i].address);
            infowindow.open(map, marker);
          }
         })(marker, i));
      }
  };

  $scope.init = function() {
    google.maps.event.addDomListener(window, 'load', $scope.initialize);
  };

  $scope.initialize();
 
});