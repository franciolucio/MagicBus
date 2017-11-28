'use strict';

angular.module('magicBus')
    .controller('ModifyTravelCtrl', function ($scope, travelService, driverService, $window, $routeParams, $translate, $filter) {

        $scope.travel = {};

        $scope.drivers = {};
        $scope.id = $routeParams.idTravel;

        travelService.getTravelById($scope.id).
        	then(function (response) {
            	$scope.travel = response.data;
        	}, function (error) {
            Materialize.toast($filter('translate')('<strong>Ups!</strong> Pending travels could not be obtained.'), 4000,'red');
        });

        $scope.acceptModifyTravel = function (id) {
            travelService.acceptModifyTravel($scope.travel,$scope.id).
            then(
                function (response) {
                    Materialize.toast($filter('translate')('<strong>Well done! </strong> The travel is modified correctly.'), 2000,'green');
                    $window.location.href = '/#/pendingTravels';
                }, 
                function (error) {
                    Materialize.toast($filter('translate')('<strong>Ups! </strong> Try again, the travel is not modified correctly.'), 4000,'red');
                }
            );
        },

        driverService.getDrivers().
            then(function (response) {
                $scope.drivers = response.data;
            }, function (error) {
            Materialize.toast($filter('translate')('<strong>Ups!</strong> Drivers could not be obtained.'), 4000,'red');
        });

        $scope.places = new google.maps.places.Autocomplete(document.getElementById('txtPlaces'));

        google.maps.event.addListener($scope.places, 'place_changed', function () {
            var place = $scope.places.getPlace();
            $scope.travel.latitude = place.geometry.location.lat();
            $scope.travel.longitude = place.geometry.location.lng();
            $scope.travel.address = place.formatted_address;   

        });

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

    $("#formValidateModifyTravelOccacional").validate({
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