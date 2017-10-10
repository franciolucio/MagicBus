'use strict';

angular.module('magicBus')
    .controller('DetailsOfTravelTodayCtrl', function ($scope, travelService, $routeParams,  $window) {

        $scope.id = $routeParams.idTravel;
        $scope.childsOfTravel = {};
       
        travelService.getChildsOfTravel($scope.id).
            then(function (response) {
                $scope.childsOfTravel = response.data;
            }, function (error) {
            Materialize.toast('<strong>Ups! </strong> This travel has not kids assigned', 4000,'red');
        });

        travelService.getTravelById($scope.id).
            then(function (response) {
                $scope.travel = response.data;
            }, function (error) {
            Materialize.toast('<strong>Ups! </strong> No travel are found', 4000,'red');
        });

        
        $scope.selectTag = function (id) {
          $scope.tags = [];
          $scope.tags.push(id);
        };

       $scope.save = function () {
           travelService.saveAssist($scope.tags,$scope.id).
            then(
                function (response) {
                    Materialize.toast('<strong>Well done! </strong> The travel is save correctly.', 2000,'green');
                    $window.location.href = '/#/travelToday/';
                }, 
                function (error) {
                    Materialize.toast('<strong>Ups! </strong> Try again, the trivel is not save correctly.', 4000,'red');
                }
            );
        },

       
/*Google Maps*/

  $scope.initMap = function() {
  		var quilmes = {
        	lat : -34.720634,
        	lng : -58.254605
    	};
   		
   		var map = new google.maps.Map(document.getElementById('mapa'), {
        	mapTypeControl : false,
        	center : quilmes,
        	zoom : 12
    	});

      var childrens = $scope.childsOfTravel;

  		var infowindow = new google.maps.InfoWindow();
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
      }
	};

  setTimeout(function(){$scope.initMap();}, 500);
});