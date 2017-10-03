'use strict';

angular.module('magicBus')
    .controller('DetailsOfTravelCtrl', function ($scope, travelService, $routeParams, $window, $location) {

        $scope.id = $routeParams.idTravel;
        $scope.childsOfTravel = {};
       
        travelService.getPendingTravelsForAChild($scope.id).
            then(function (response) {
                $scope.childsOfTravel = response.data;
            }, function (error) {
            Materialize.toast('<strong>Ups! </strong> This travel has not kids assigned', 4000,'red');
        });

/*Google Maps*/

  $scope.initMap = function() {
  		var quilmes = {
        	lat : -34.720634,
        	lng : -58.254605
    	};
   		
   		var map = new google.maps.Map(document.getElementById('mapa'), {
        	mapTypeControl : false,
        	center : quilmes,
        	zoom : 11
    	});

      var childrens = $scope.childsOfTravel;

      var markers = [{
        lat: -34.7430589,
        lng: -58.258892
      },
      {
        lat: -34.715897 ,
        lng: -58.249591
      },
      {
        lat: -34.719478,
        lng: -58.255287
      }];

  		var infowindow = new google.maps.InfoWindow();
  	  var marker, i;
        for (i = 0; i < markers.length; i++) {  
          marker = new google.maps.Marker({
          position: new google.maps.LatLng(markers[i].lat, markers[i].lng),
          map: map
        });

        google.maps.event.addListener(marker, 'click', (function(marker, i) {
          return function() {
            infowindow.setContent(childrens[i].surname + ", " + childrens[i].name + '<br>' + childrens[i].address);
            infowindow.open(map, marker);
          }
        })(marker, i));
      }
	};

  $scope.initMap();
});


