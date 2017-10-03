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
    	var place = $scope.places.getPlace();
      $scope.child.latitude = place.geometry.location.lat();
      $scope.child.longitude = place.geometry.location.lng();
      $scope.child.address = place.formatted_address;
      childService.save($scope.child);
    };

    $scope.places = new google.maps.places.Autocomplete(document.getElementById('txtPlaces'));

    google.maps.event.addListener($scope.places, 'place_changed', function () {
    });
  });