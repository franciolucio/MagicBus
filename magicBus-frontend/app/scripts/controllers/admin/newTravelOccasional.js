'use strict';

angular.module('magicBus')
    .controller('NewTravelOccasionalCtrl', function ($scope, travelService, driverService, $location, $translate) {

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


    $.validator.setDefaults({
    errorClass: 'help-block',
    highlight: function(element) {
      $(element).parent().removeClass('has-success').addClass('has-error');
    },
    unhighlight: function(element) {
      $(element).parent().removeClass('has-error').addClass('has-success');
    }
  });

    $("#formValidateNewTravelOccacional").validate({
        lang: 'es',
        rules: {
            destination:"required",
            direccion:"required",
            date:"required",
            scheduler:"required",
            driver:"required",
        },
        //For custom messages
        messages: {
            destination:{
                required: $translate.instant("Please enter a destination"),
            },
            direccion:{
                required: $translate.instant("Please enter an address")
            },
            date: {
                required: $translate.instant('Please enter a date'),
            },
            scheduler:{
                required: $translate.instant("Please enter a scheduler"),
            },
            driver:{
                required: $translate.instant("Please select a driver"),
            },
        },
        errorElement : 'div',
        errorPlacement: function(error, element) {
          var placement = $(element).data('error');
          if (placement) {
            $(placement).append(error)
          } else {
            error.insertAfter(element);
          }
        }
     });
  });