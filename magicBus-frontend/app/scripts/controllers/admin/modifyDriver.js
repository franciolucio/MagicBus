'use strict';

angular.module('magicBus')
    .controller('ModifyDriverCtrl', function ($scope, driverService, $window, $routeParams, $translate, $filter) {

        $scope.driver = {};
        $scope.drivers = {};
        $scope.id = $routeParams.idDriver ;

        driverService.getDriverById($scope.id).
        	then(function (response) {
            	$scope.driver = response.data;
        	}, function (error) {
            Materialize.toast($filter('translate')('<strong>Ups!</strong> Driver could not be obtained.'), 4000,'red');
        });

        $scope.acceptModifyDriver = function (id) {
            var place = $scope.places.getPlace();
            $scope.driver.latitude = place.geometry.location.lat();
            $scope.driver.longitude = place.geometry.location.lng();
            $scope.driver.address = place.formatted_address;
            driverService.acceptModifyDriver($scope.driver).
            then(
                function (response) {
                    Materialize.toast($filter('translate')('<strong>Well done! </strong> The driver is modified correctly.'), 2000,'green');
                    $window.location.href = '/#/drivers/';
                }, 
                function (error) {
                    Materialize.toast($filter('translate')('<strong>Ups! </strong> Try again, the driver is not modified correctly.'), 4000,'red');
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

        $("#formValidateModifyDriver").validate({
            lang: 'es',
            rules: {
                name:"required",
                surname:"required",
                document: {
                    required: true,
                    minlength: 7,
                    maxlength: 8
                },
                age: {
                    required: true,
                    minlength: 1,
                    maxlength: 2
                },
                direccion:"required",
                email: {
                    required: true,
                    email:true
                },
                telephone: {
                    required: true,
                    minlength: 8,
                    maxlength: 8
                },
                celphone: {
                    required: true,
                    minlength: 8,
                    maxlength: 10
                },
                license: {
                    required: true,
                    minlength: 7,
                    maxlength: 8
                },
            },
            //For custom messages
            messages: {
                name:{
                    required: $translate.instant("Please enter a name"),
                },
                surname:{
                    required: $translate.instant("Please enter a surname"),
                },
                document:{
                    required: $translate.instant("Please enter a document"),
                    minlength: $translate.instant("Please enter at least 7 numbers"),
                    maxlength: $translate.instant("Please enter less than 8 numbers")
                },
                age:{
                    required: $translate.instant("Please enter a age"),
                    minlength: $translate.instant("Please enter at least a number"),
                    maxlength: $translate.instant("Please enter less than 2 numbers")            
                },
                direccion:{
                    required: $translate.instant("Please enter a address")
                },
                email: {
                    required: $translate.instant('Please enter an email'),
                    email: $translate.instant('Please enter a valid mail, email@example.com')
                },
                telephone:{
                    required: $translate.instant("Please enter a telephone"),
                    minlength: $translate.instant("Please enter at least 8 numbers"),
                    maxlength: $translate.instant("Please enter less than 8 numbers")
                },
                celphone:{
                    required: $translate.instant("Please enter a celphone"),
                    minlength: $translate.instant("Please enter at least 8 numbers"),
                    maxlength: $translate.instant("Please enter less than 8 numbers")
                },
                license:{
                    required: $translate.instant("Please enter a license"),
                    minlength: $translate.instant("Please enter at least 7 numbers"),
                    maxlength: $translate.instant("Please enter less than 8 numbers")
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