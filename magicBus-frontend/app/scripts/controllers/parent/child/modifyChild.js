angular.module('magicBus')
    .controller('ModifyChildCtrl', function ($scope, childService, $window, $routeParams, $translate , $filter) {

        $scope.child = {};
        $scope.id = $routeParams.idChild;

        childService.getChildByID($scope.id).
        	then(function (response) {
            	$scope.child = response.data;
        	}, function (error) {
            Materialize.toast($filter('translate')('<strong>Ups!</strong> Child could not be obtained.'), 4000,'red');
        });

        $scope.acceptModifyOfChild = function () {
            var place = $scope.places.getPlace();
            $scope.child.latitude = place.geometry.location.lat();
            $scope.child.longitude = place.geometry.location.lng();
            $scope.child.address = place.formatted_address;
            childService.acceptModifyOfChild($scope.child).
            then(
                function (response) {
                    Materialize.toast($filter('translate')('<strong>Well done! </strong> The child is modified correctly.'), 2000,'green');
                    $window.location.href = '/#/registeredChilds';
                }, 
                function (error) {
                    Materialize.toast($filter('translate')('<strong>Ups! </strong> Try again, the child is not modified correctly.'), 4000,'red');
                }
            );
        };

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

    $("#formValidateModifyChild").validate({
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
            prepaidMedicine:"required",
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
            prepaidMedicine:{
                required: $translate.instant("Please enter a prepaidMedicine"),
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