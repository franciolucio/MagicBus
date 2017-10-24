'use strict';

angular.module('magicBus')
    .controller('NewTravelDiaryCtrl', function ($scope, travelService, driverService, $window) {

        $scope.travel = {};
        $scope.dateUntil = new Date();
        $scope.drivers = {};

        $scope.daysOfWeek = [{
          name: 'Monday',
          confirm: false
        }, {
          name: 'Tuesday',
          confirm: false
        }, {
          name: 'Wednesday',
          confirm: false
        }, {
          name: 'Thursday',
          confirm: false
        }, {
          name: 'Friday',
          confirm: false
        }, {
          name: 'Saturday',
          confirm: false
        }, {
          name: 'Sunday',
          confirm: false
        }];

        travelService.clear();
        driverService.clear();

        driverService.getDrivers().
            then(function (response) {
                $scope.drivers = response.data;
            }, function (error) {
            Materialize.toast('<strong>Ups!</strong> Drivers could not be obtained.', 4000,'red');
        });

		  $scope.createNewTravelDiary = function () {
        var place = $scope.places.getPlace();
        $scope.travel.latitude = place.geometry.location.lat();
        $scope.travel.longitude = place.geometry.location.lng();
        $scope.travel.address = place.formatted_address;
          var days = JSON.stringify($scope.daysOfWeek);
          travelService.saveNewTravelDiary($scope.travel, $scope.dateUntil, days).
              then(
                    function (response) {
                        Materialize.toast('<strong>Well done! </strong> The travel is save correctly.', 2000,'green');
                        $window.location.href = '/#/drivers';
                    }, 
                    function (error) {
                        Materialize.toast('<strong>Ups! </strong> Try again, the travel is not save correctly.', 4000,'red');
                    }
                );
        };  

        $scope.drivers = driverService.getDrivers();

        $scope.places = new google.maps.places.Autocomplete(document.getElementById('txtPlaces'));

        google.maps.event.addListener($scope.places, 'place_changed', function () {

        });
});
