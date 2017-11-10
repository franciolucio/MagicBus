'use strict';

angular.module('magicBus')
    .controller('TravelsForChildCtrl', function ($scope, userService, parentService, travelService, $window, $route , $filter, $translate) {

        $scope.id = userService.getId();
    	$scope.registeredChilds = {};
        $scope.pendingTravelsForAChild = {};
        $scope.pendingTravelsForChilds = {};
        $scope.childIDSelected = 0;
        $scope.showTable = {value: true};        
        $scope.selected = "";

        $scope.setSelected = function (surname, name) {
            $scope.selected = surname + " " + name;
        }

        $scope.getPendingTravelsForAChild = function (idChild) {
            $scope.showTable.value = true;
            $scope.childIDSelected = idChild;
            travelService.getPendingTravelsForAChild(idChild).
                then(function (response) {
                    $scope.pendingTravelsForAChild = response.data;
                }, function (error) {
                Materialize.toast($filter('translate')('<strong>Ups!</strong> Pending travels could not be obtained.'), 4000,'red');
            });
        }

        $scope.getPendingTravelsForAllChilds = function () {
            $scope.showTable.value = false;
            travelService.getPendingTravelsForAllChilds($scope.id).
                then(function (response) {
                    $scope.pendingTravelsForChilds = response.data;
                }, function (error) {
                Materialize.toast($filter('translate')('<strong>Ups!</strong> Pending travels could not be obtained.'), 4000,'red');
            });
        }
        
    	parentService.getRegisteredChildsByID($scope.id).
        	then(function (response) {
            	$scope.registeredChilds = response.data;
              $scope.childIDSelected = $scope.registeredChilds[0].id;
              $scope.getPendingTravelsForAChild($scope.childIDSelected);
              $scope.setSelected($scope.registeredChilds[0].surname, $scope.registeredChilds[0].name);
        	}, function (error) {
            Materialize.toast($filter('translate')('<strong>Ups!</strong> Registered Childs could not be obtained.'), 4000,'red');
        });

        $scope.deleteChildForTravel = function (id) {
           travelService.deleteChildForTravel($scope.childIDSelected, id).
            then(
                function (response) {
                    Materialize.toast($filter('translate')('<strong>Well done! </strong> The child is deleted to this travel correctly.'), 2000,'green');
                    $route.reload();
                }, 
                function (error) {
                    Materialize.toast($filter('translate')('<strong>Ups! </strong> Try again, the child is not deleted correctly.'), 4000,'red');
                }
            );
        }

        $scope.details = function (idTravel) {
        $window.location.href = '/#/detailsOfTravelTodayParent/' + $scope.id + '/' + $scope.childIDSelected + '/' + idTravel;
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