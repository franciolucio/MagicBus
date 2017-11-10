'use strict';

angular.module('magicBus')
    .controller('NewTravelOccasionalCtrl', function ($scope, travelService, driverService, $location, $translate, $filter) {

        $scope.travel = {};
        $scope.drivers = {};

        travelService.clear();
        driverService.clear();

        driverService.getDrivers().
            then(function (response) {
                $scope.drivers = response.data;
            }, function (error) {
            Materialize.toast($filter('translate')('<strong>Ups!</strong> Drivers could not be obtained.'), 4000,'red');
        });

		$scope.createNewTravel = function () {
            var place = $scope.places.getPlace();
            $scope.travel.latitude = place.geometry.location.lat();
            $scope.travel.longitude = place.geometry.location.lng();
            $scope.travel.address = place.formatted_address;   
            travelService.saveNewTravelOccasional($scope.travel)
            .then(function (response) {
                Materialize.toast($filter('translate')('<strong>Well done! </strong> The travel is save correctly.'), 2000,'green');
                $location.path('/travels');
            },
            function (error) {
                Materialize.toast($filter('translate')('<strong>Ups! </strong> Try again, the travel is not save correctly.'), 4000,'red');
        });
        }

        $scope.drivers = driverService.getDrivers();

        $scope.places = new google.maps.places.Autocomplete(document.getElementById('txtPlaces'));

        google.maps.event.addListener($scope.places, 'place_changed', function () {});


    $.validator.setDefaults({
    errorClass: 'help-block',
    highlight: function(element) {
      $(element).parent().removeClass('has-success').addClass('has-error');
    },
    unhighlight: function(element) {
      $(element).parent().removeClass('has-error').addClass('has-success');
    }
  });

    $scope.time = new Date();
 
    // Optional message to display below each input field
    $scope.message = {
      hour: 'Hour is required',
      minute: 'Minute is required',
      meridiem: 'Meridiem is required'
    }
 
    $scope.readonly = false;
 
    $scope.required = true;

    $("#formValidateNewTravelOccacional").validate({
        lang: 'es',
        rules: {
            destination:"required",
            direccion:"required",
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