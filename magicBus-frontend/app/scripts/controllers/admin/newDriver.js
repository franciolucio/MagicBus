'use strict';

angular.module('magicBus')
    .controller('NewDriverCtrl', function ($scope, driverService) {

        $scope.driver = {};

        driverService.clear();

        $scope.createNewDriver = function () {
        	var place = $scope.places.getPlace();
        	$scope.driver.latitude = place.geometry.location.lat();
        	$scope.driver.longitude = place.geometry.location.lng();
        	$scope.driver.address = place.formatted_address;
            driverService.save($scope.driver);
            Materialize.toast('<strong>Well done! </strong> The driver is created correctly.', 2000,'green');
        }

        $scope.places = new google.maps.places.Autocomplete(document.getElementById('txtPlaces'));
		google.maps.event.addListener($scope.places, 'place_changed', function () {});
});