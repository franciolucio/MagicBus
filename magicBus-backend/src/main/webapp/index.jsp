<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <style type="text/css">
    #mapa {	position: relative;
			padding-bottom: 75%; // This is the aspect ratio
			height: 0;
			overflow: hidden;
		   }
    </style>
    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAFR3fk9zc77EFzy-sTfrjkIWVtG85M0JY"></script>
    <script type="text/javascript">
    function initialize() {
    
      var marcadores = [
        ['En este lugar vive Lucio', -34.7430435, -58.25890429999998],
        ['En este lugar vive Emiliano', -34.719658 , -58.255364],
        ['En este lugar vive Alan',  -34.752297 , -58.205647],
        ['En este lugar vive Ezequiel', -34.773081 , -58.249788],
        ['En este lugar vive Leandro',-34.738311 , -58.262582],
        ['En este lugar vive Nicolas', -34.724384 , -58.25824] 
      ];
      var map = new google.maps.Map(document.getElementById('mapa'), {
        zoom: 12,
        center: new google.maps.LatLng(-34.720634 , -58.254605),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
      var infowindow = new google.maps.InfoWindow();
      var marker, i;
      for (i = 0; i < marcadores.length; i++) {  
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(marcadores[i][1], marcadores[i][2]),
          map: map
        });
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
          return function() {
            infowindow.setContent(marcadores[i][0]);
            infowindow.open(map, marker);
          }
        })(marker, i));
      }
    }
    google.maps.event.addDomListener(window, 'load', initialize);
    </script>
  </head>
  <body>
    <div id="mapa"></div>
  </body>
</html>

