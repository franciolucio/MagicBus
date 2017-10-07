'use strict';

angular.module('magicBus')
  .controller('NewChildCtrl', function ($scope, parentService) {

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

    $scope.createNewChild = function () {
      var place = $scope.places.getPlace();
      $scope.child.latitude = place.geometry.location.lat();
      $scope.child.longitude = place.geometry.location.lng();
      $scope.child.address = place.formatted_address;
      parentService.saveNewChild($scope.child)
        .then(function (response) {
            Materialize.toast('<strong>Well done!</strong> Child added successfully.', 2000,'green');
            $location.path('/registeredChilds');
        },
        function (error) {
            Materialize.toast('<strong>Ups!</strong> Try again.', 4000,'red');
        });
    }

    $scope.places = new google.maps.places.Autocomplete(document.getElementById('txtPlaces'));

    google.maps.event.addListener($scope.places, 'place_changed', function () {
    });
  });