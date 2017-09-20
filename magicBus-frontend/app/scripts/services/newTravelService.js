'use strict';

angular.module('magicBus')
    .service('newTravelService', function (apiService, $location) {

        var travel = {
            destination: "",
            date: "",
            schedule: "",
            driver: "",
        };

        var id = null;

        return {

            getId: function () {
                return id;
            },

            clear: function () {
                id = null;
                travel.destination = "";
                travel.date = "";
                travel.schedule = "";
                travel.driver = "";
            },

            save: function (newTravel) {
                    apiService.saveNewTravel(newTravel)
                        .then(function (response) {
                            Materialize.toast('<strong>Well done!</strong> Travel added successfully.', 2000);
                            $location.path('/travels');
                        },
                        function (error) {
                            Materialize.toast('<strong>Ups!</strong> Try again.', 4000);
                        });
            }
          };
    });