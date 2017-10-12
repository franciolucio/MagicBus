'use strict';

angular.module('magicBus')
    .controller('DetailsOfTravelCtrl', function ($scope, travelService, $routeParams, $window, $location) {

        $scope.id = $routeParams.idTravel;
        $scope.childsOfTravel = {};
        $scope.child = {};
       
        travelService.getChildsOfTravel($scope.id).
            then(function (response) {
                $scope.childsOfTravel = response.data;
            }, function (error) {
            Materialize.toast('<strong>Ups! </strong> This travel has not kids assigned', 4000,'red');
        });

/*Google Maps*/

  var geocoder;
  var map;
  var directionsDisplay;
  var directionsService = new google.maps.DirectionsService();
  
  $scope.initMap = function() {

    directionsDisplay = new google.maps.DirectionsRenderer();

    var quilmes = {
          lat : -34.720634,
          lng : -58.254605
      };

    var map = new google.maps.Map(document.getElementById('mapa'), {
          mapTypeControl : false,
          center : quilmes,
          zoom : 12
      });

    directionsDisplay.setMap(map);
    var infowindow = new google.maps.InfoWindow();

    var marker, i;
    var request = {
      travelMode: google.maps.TravelMode.DRIVING
    };
    var childrens = $scope.childsOfTravel;

    var marker, i;
        for (i = 0; i < childrens.length; i++) {  
          marker = new google.maps.Marker({
          position: new google.maps.LatLng(childrens[i].latitude, childrens[i].longitude),
          map: map
        });

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
          return function() {
            infowindow.setContent(childrens[i].surname + ", " + childrens[i].name + '<br>' + childrens[i].address);
            infowindow.open(map, marker);
          }
        })(marker, i));

    if (i == 0) request.origin = marker.getPosition();
    else if (i == childrens.length - 1) request.destination = marker.getPosition();
    else {
      if (!request.waypoints) request.waypoints = [];
      request.waypoints.push({
        location: marker.getPosition(),
        stopover: true
      });
    }
    }

    directionsService.route(request, function(result, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(result);
      computeTotalDistance(result);
    } else {
      alert("directions result " + status);
    }
  });

    function computeTotalDistance(result) {
  var totalDist = 0;
  var totalTime = 0;
  var myroute = result.routes[0];
  for (i = 0; i < myroute.legs.length; i++) {
    totalDist += myroute.legs[i].distance.value;
    totalTime += myroute.legs[i].duration.value;
  }
  totalDist = totalDist / 1000.
  document.getElementById("total").innerHTML = "total distance is: " + totalDist + " km<br>total time is: " + (totalTime / 60).toFixed(2) + " minutes";
}
  





  };
 
 setTimeout(function(){$scope.initMap();}, 500);
});