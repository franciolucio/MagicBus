'use strict';

angular.module('magicBus')
    .controller('NewChildCtrl', function ($scope, newChildService) {

        $scope.child = {};

        newChildService.clear();

        $scope.createNewChild = function () {
        	var geocoder = new google.maps.Geocoder();

     	function geocodeAddress(geocoder) {
        var address = document.getElementById('$scope.child.address').value;
        geocoder.geocode({'address': address}, function(results, status) {
          if (status === 'OK') {
            $scope.child.latitude = results[0].geometry.location;
           } else {
            alert('Geocode was not successful for the following reason: ' + status);
          }
        });
      }
            newChildService.save($scope.child);
       }

        
});