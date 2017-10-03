'use strict';

angular.module('magicBus')
  .controller('NewChildCtrl', function ($scope, childService) {

    $scope.child = {
      surname: "",
      name: "",
      document: 0,
      age:"",
      address: "",
      email: "",
      telephone: 0,
      celphone:0,
      pregnanceMedicine: "",
      latitude: 0,
      longitude: 0
    };

    childService.clear();

    $scope.createNewChild = function () {
    	var geocoder = new google.maps.Geocoder();
      geocoder.geocode({'address': $scope.child.address}, function(results, status) {
        if (status === 'OK') {
          $scope.child.latitude = results[0].geometry.location.lat();
          $scope.child.longitude = results[0].geometry.location.lng();
        } 
        else {
          alert('Geocode was not successful for the following reason: ' + status);
        }
      });
      window.setTimeout(function(){
        childService.save($scope.child);
      }, 500);
    };

    $scope.map = function () {
      google.maps.event.addDomListener(window, 'load', function () {
        var places = new google.maps.places.Autocomplete(document.getElementById('txtPlaces'));
        google.maps.event.addListener(places, 'place_changed', function () {
          $scope.child.address = places.getPlace();
          });
      });
    };
    $scope.map();
  });