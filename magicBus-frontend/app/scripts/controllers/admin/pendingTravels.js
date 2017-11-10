'use strict';

angular.module('magicBus')
    .controller('PendingTravelsCtrl', function ($scope,userService,travelService,$window,$route,$filter) {

    $scope.idAdmin = userService.getId();
    $scope.pendingTravels = {};


    travelService.getPendingTravels().
    	then(function (response) {
        	$scope.pendingTravels = response.data;
    	}, function (error) {
        Materialize.toast('<strong>Ups!</strong> Pending travels could not be obtained.', 4000,'red');
    });

    $scope.details = function (idTravel) {
        $window.location.href = '/#/detailsOfTravel/' + $scope.idAdmin + '/' + idTravel;
    };

        $scope.deleteTravel = function (id) {
           travelService.deleteTravel(id).
            then(
                function (response) {
                    Materialize.toast($filter('translate')('<strong>Well done! </strong> The travel is deleted correctly.'), 2000,'green');
                    $route.reload();
                }, 
                function (error) {
                    Materialize.toast($filter('translate')('<strong>Ups! </strong> Try again, the travel is not deleted correctly.'), 4000,'red');
                }
            );
        };


    $scope.modifyTravel = function (id) {
        $window.location.href = '/#/modifyTravel/' + id;
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