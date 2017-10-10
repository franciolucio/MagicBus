angular.module('magicBus')
    .controller('ModifyChildCtrl', function ($scope, childService, $window, $routeParams) {

        $scope.child = {};
        $scope.id = $routeParams.idChild;

        childService.getChildByID($scope.id).
        	then(function (response) {
            	$scope.child = response.data;
        	}, function (error) {
            Materialize.toast('<strong>Ups!</strong> Child could not be obtained.', 4000,'red');
        });

        $scope.acceptModifyOfChild = function () {
           childService.acceptModifyOfChild($scope.child).
            then(
                function (response) {
                    Materialize.toast('<strong>Well done! </strong> The child is modified correctly.', 2000,'green');
                    $window.location.href = '/#/registeredChilds';
                }, 
                function (error) {
                    Materialize.toast('<strong>Ups! </strong> Try again, the child is not modified correctly.', 4000,'red');
                }
            );
        };
});