'use strict';

angular.module('magicBus')
  .controller('NewChildCtrl', function ($scope, parentService, $location) {

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

    $("#formValidate").validate({
        rules: {
            name:"required",
            surname:"required",
            document: {
                required: true,
                minlength: 8
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
                minlength: 8
            },
            celphone: {
                required: true,
                minlength: 8
            },
            pregnancyMedicine:"required",
        },
        //For custom messages
        messages: {
            name:{
                required: "Enter a name",
            },
            surname:{
                required: "Enter a surname",
            },
            document:{
                required: "Enter a document",
                minlength: "Enter at least 8 numbers"
            },
            age:{
                required: "Enter a age",
                minlength: "Enter at least 1 number",
                maxlength: "Enter less than 2 numbers"
            },
            direccion:{
                required: "Enter a address",
            },
            email: {
                required: 'Please enter an email',
                email: 'Please enter a valid email'
            },
            telephone:{
                required: "Enter a telephone",
                minlength: "Enter at least 8 numbers"
            },
            celphone:{
                required: "Enter a celphone",
                minlength: "Enter at least 8 numbers"
            },
            pregnancyMedicine:{
                required: "Enter a pregnancyMedicine",
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