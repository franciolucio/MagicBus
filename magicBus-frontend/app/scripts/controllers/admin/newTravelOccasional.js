'use strict';

angular.module('magicBus')
    .controller('NewTravelOccasionalCtrl', function ($scope, travelService, driverService, $location) {

        $scope.travel = {};
        $scope.drivers = {};

        travelService.clear();
        driverService.clear();

        driverService.getDrivers().
            then(function (response) {
                $scope.drivers = response.data;
            }, function (error) {
            Materialize.toast('<strong>Ups!</strong> Drivers could not be obtained.', 4000,'red');
        });

		$scope.createNewTravel = function () {
            var place = $scope.places.getPlace();
            $scope.travel.latitude = place.geometry.location.lat();
            $scope.travel.longitude = place.geometry.location.lng();
            $scope.travel.address = place.formatted_address;   
            travelService.saveNewTravelOccasional($scope.travel)
            .then(function (response) {
                Materialize.toast('<strong>Well done!</strong> Travel added successfully.', 2000,'green');
                $location.path('/travels');
            },
            function (error) {
                Materialize.toast('<strong>Ups!</strong> Try again.', 4000,'red');
        });
        }

        $scope.drivers = driverService.getDrivers();

        $scope.places = new google.maps.places.Autocomplete(document.getElementById('txtPlaces'));

        google.maps.event.addListener($scope.places, 'place_changed', function () {});
});