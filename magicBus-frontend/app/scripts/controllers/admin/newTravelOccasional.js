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

        
        $('.datepicker').pickadate({
            selectMonths: true, // Creates a dropdown to control month
            selectYears: 15, // Creates a dropdown of 15 years to control year,
            today: 'Today',
            clear: 'Clear',
            close: 'Ok',
            closeOnSelect: false // Close upon selecting a date,
        });

        $('.timepicker').pickatime({
            default: 'now', // Set default time: 'now', '1:30AM', '16:30'
            fromnow: 0,       // set default time to * milliseconds from now (using with default = 'now')
            twelvehour: false, // Use AM/PM or 24-hour format
            donetext: 'OK', // text for done-button
            cleartext: 'Clear', // text for clear-button
            canceltext: 'Cancel', // Text for cancel-button
            autoclose: false, // automatic close timepicker
            ampmclickable: true, // make AM PM clickable
            aftershow: function(){} //Function for after opening timepicker
        });
});


        