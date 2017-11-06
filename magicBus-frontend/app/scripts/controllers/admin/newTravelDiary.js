'use strict';

angular.module('magicBus')
    .controller('NewTravelDiaryCtrl', function ($scope, travelService, driverService, childService, $window, $translate) {

        $scope.travel = {};
        $scope.dateUntil = new Date();
        $scope.drivers = {};
        $scope.childs = {};

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
        childService.clear();

        driverService.getDrivers().
            then(function (response) {
                $scope.drivers = response.data;
            }, function (error) {
            Materialize.toast('<strong>Ups!</strong> Drivers could not be obtained.', 4000,'red');
        });

        childService.getAllChilds().
            then(function (response) {
                $scope.childs = response.data;
            }, function (error) {
            Materialize.toast('<strong>Ups!</strong> Childs could not be obtained.', 4000,'red');
        });

		  $scope.createNewTravelDiary = function () {
        var place = $scope.places.getPlace();
        $scope.travel.latitude = place.geometry.location.lat();
        $scope.travel.longitude = place.geometry.location.lng();
        $scope.travel.address = place.formatted_address;
          var days = JSON.stringify($scope.daysOfWeek);
          var childsGo = JSON.stringify($scope.childs);
          travelService.saveNewTravelDiary($scope.travel, $scope.dateUntil, days, childsGo).
              then(
                    function (response) {
                        Materialize.toast('<strong>Well done! </strong> The travel is save correctly.', 2000,'green');
                        $window.location.href = '/#/pendingTravels';
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



    $.validator.setDefaults({
    errorClass: 'help-block',
    highlight: function(element) {
      $(element).parent().removeClass('has-success').addClass('has-error');
    },
    unhighlight: function(element) {
      $(element).parent().removeClass('has-error').addClass('has-success');
    }
  });

    $("#formValidateNewTravelDiary").validate({
        lang: 'es',
        rules: {
            destination:"required",
            direccion:"required",
            dateFrom:"required",
            dateUntil:"required",
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
            dateFrom: {
                required: $translate.instant('Please enter a date'),
            },
            dateUntil: {
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