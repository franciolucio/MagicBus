'use strict';

angular.module('magicBus')
    .service('mapService', function () {

        var map;
        var directionsDisplay;
        var directionsService = new google.maps.DirectionsService();

        return {

            initMap: function(childs) {

                directionsDisplay = new google.maps.DirectionsRenderer();
                
                var quilmes = {
                    lat : -34.720634,
                    lng : -58.254605
                };

                var originTravel = new google.maps.Marker({
                    position: new google.maps.LatLng(-34.771769, -58.250761)
                });

                var destinationTravel = new google.maps.Marker({
                    position: new google.maps.LatLng(-34.796581, -58.276012)
                });

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
                var childrens = childs;

                var marker, i;
                for (i = 0; i < childrens.length; i++) {  
                    marker = new google.maps.Marker({
                    position: new google.maps.LatLng(childrens[i].latitude, childrens[i].longitude)
                });

               
                request.origin = originTravel.getPosition();
                request.destination = destinationTravel.getPosition();
                    if (!request.waypoints) request.waypoints = [];
                            request.waypoints.push({
                            location: marker.getPosition(),
                            stopover: true
                    });

                 google.maps.event.addListener(marker, 'click', (function(marker, i) {
                    return function() {
                        infowindow.setContent(childrens[i].surname + ", " + childrens[i].name + '<br>' + childrens[i].address);
                        infowindow.open(map, marker);
                    }
                })(marker, i));
                            
                }

                directionsService.route(request, function(result, status) {
                    if (status == google.maps.DirectionsStatus.OK) {
                        directionsDisplay.setDirections(result);
                        directionsDisplay.setMap(map);
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
                    document.getElementById("total").innerHTML = "TOTAL DISTANCE IS: " + totalDist + " KM <br> TOTAL TIME IS: " + (totalTime / 60).toFixed(2) + " MINUTES";
                };
            }
        };
    });