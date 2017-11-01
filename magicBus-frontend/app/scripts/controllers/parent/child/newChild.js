'use strict';

angular.module('magicBus')
  .controller('NewChildCtrl', function ($scope, parentService, $location, $translate) {

    $scope.child = {
      surname: "",
      name: "",
      document: null,
      age:"",
      address: "",
      email: "",
      telephone: null,
      celphone: null,
      pregnanceMedicine: "",
      latitude: 0,
      longitude: 0
    };

    $scope.createNewChild = function () {
      var place = $scope.places.getPlace();
      $scope.child.latitude = place.geometry.location.lat();
      $scope.child.longitude = place.geometry.location.lng();
      $scope.child.address = place.formatted_address;
      parentService.saveNewChild($scope.child)
        .then(function (response) {
            Materialize.toast('<strong>Well done!</strong> Child added successfully.', 2000,'green');
            $location.path('/registeredChilds');
        },
        function (error) {
            Materialize.toast('<strong>Ups!</strong> Try again.', 4000,'red');
        });
    }

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

    $("#formValidatNewChild").validate({
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
                maxlength: 8
            },
            pregnancyMedicine:"required",
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
            pregnancyMedicine:{
                required: $translate.instant("Please enter a pregnancyMedicine"),
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