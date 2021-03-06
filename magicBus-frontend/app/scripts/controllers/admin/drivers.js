'use strict';

angular.module('magicBus')
    .controller('DriversCtrl', function ($scope, driverService, $window, $route, $filter) {

        $scope.drivers = {};

        driverService.getDrivers().
        	then(function (response) {
            	$scope.drivers = response.data;
        	}, function (error) {
            Materialize.toast($filter('translate')('<strong>Ups!</strong> Drivers could not be obtained.'), 4000,'red');
        });

        $scope.modifyDriver = function (idDriver) {
            $window.location.href = '/#/modifyDriver/' + idDriver;
        };

        $scope.deleteDriver = function (idDriver) {
           driverService.deleteDriver(idDriver).
            then(
                function (response) {
                    Materialize.toast($filter('translate')('<strong>Well done! </strong> The driver is deleted correctly.'), 2000,'green');
                    $route.reload();
                }, 
                function (error) {
                    Materialize.toast($filter('translate')('<strong>Ups! </strong> Try again, the driver cannot delete this driving on a trip.'), 4000,'red');
                }
            );
        };

        $scope.sortTable = function (n) {
          var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
          table = document.getElementById("myTable");
          switching = true;
          //Set the sorting direction to ascending:
          dir = "asc"; 
          /*Make a loop that will continue until
          no switching has been done:*/
          while (switching) {
            //start by saying: no switching is done:
            switching = false;
            rows = table.getElementsByTagName("TR");
            /*Loop through all table rows (except the
            first, which contains table headers):*/
            for (i = 1; i < (rows.length - 1); i++) {
              //start by saying there should be no switching:
              shouldSwitch = false;
              /*Get the two elements you want to compare,
              one from current row and one from the next:*/
              x = rows[i].getElementsByTagName("TD")[n];
              y = rows[i + 1].getElementsByTagName("TD")[n];
              /*check if the two rows should switch place,
              based on the direction, asc or desc:*/
              if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                  //if so, mark as a switch and break the loop:
                  shouldSwitch= true;
                  break;
                }
              } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                  //if so, mark as a switch and break the loop:
                  shouldSwitch= true;
                  break;
                }
              }
            }
            if (shouldSwitch) {
              /*If a switch has been marked, make the switch
              and mark that a switch has been done:*/
              rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
              switching = true;
              //Each time a switch is done, increase this count by 1:
              switchcount ++;      
            } else {
              /*If no switching has been done AND the direction is "asc",
              set the direction to "desc" and run the while loop again.*/
              if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
              }
            }
          }
        } 
});