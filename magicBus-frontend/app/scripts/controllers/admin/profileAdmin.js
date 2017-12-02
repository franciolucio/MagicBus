'use strict';

angular.module('magicBus')
    .controller('ProfileAdminCtrl', function ($scope, userService, parentService, $window, $translate, $filter) {

        $scope.admin = userService.getProfile();

       	$scope.modifyProfile = function () {
            $window.location.href = '/#/modifyProfileAdmin';
        }

        $scope.acceptModifyAdmin = function () {
            parentService.acceptModifyAdmin($scope.admin).
            then(function (response) {
                Materialize.toast($filter('translate')('<strong>Well done! </strong> The profile is modified correctly.'), 2000,'green');
                $window.location.href = '/#/profileAdmin';
            }, function (error) {
             Materialize.toast($filter('translate')('<strong>Ups! </strong> Try again, the profile is not modified correctly.'), 4000,'red');
            });
        }

        $scope.places = new google.maps.places.Autocomplete(document.getElementById('txtPlaces'));
        google.maps.event.addListener($scope.places, 'place_changed', function () {
            var place = $scope.places.getPlace();
            $scope.admin.latitude = place.geometry.location.lat();
            $scope.admin.longitude = place.geometry.location.lng();
            $scope.admin.address = place.formatted_address;
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

    $("#formValidateModifyProfileAdmin").validate({
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
            email:"required",
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