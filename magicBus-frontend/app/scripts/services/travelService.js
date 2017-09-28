'use strict';

angular.module('magicBus')
    .service('travelService', function ($http,$location,validator) {


        var travel = {
            destination: "",
            date: "",
            scheduler: "",
            driver: "",
        };

        var id = null;

        return {

                url: function () {
                return "http://localhost:8080/magicBus-backend/rest/";
            },

            getId: function () {
                return id;
            },

            clear: function () {
                id = null;
                travel.destination = "";
                travel.date = "";
                travel.scheduler = "";
                travel.driver = "";
            },

            save: function (newTravel) {
                if (this.checkFields(newTravel)) {
                    this.saveNewTravel(newTravel)
                        .then(function (response) {
                            Materialize.toast('<strong>Well done!</strong> Travel added successfully.', 2000,'green');
                            $location.path('/travels');
                        },
                        function (error) {
                            Materialize.toast('<strong>Ups!</strong> Try again.', 4000,'red');
                    });
                }
            },

            getPendingTravels: function () {
                return $http({
                    method: 'get',
                    url: this.url() + "travel/allPendingTravels" 
                });
            },

            getHistoricTravels: function () {
                return $http({
                    method: 'get',
                    url: this.url() + "travel/allHistoricTravels" 
                });
            },

            saveNewTravel: function (newTravel) {
                return $http({
                    method: 'post',
                    url: this.url() + "travel/add/" +   newTravel.destination + "/" + 
                                                        newTravel.date + "/" + 
                                                        newTravel.scheduler + "/" + 
                                                        newTravel.driver
                });
            },

            checkFields: function (newTravel) {
                return (validator.checkDestination(newTravel.destination) && validator.checkDate(newTravel.date) &&
                        validator.checkScheduler(newTravel.scheduler) && validator.checkDriver(newTravel.driver));
            },
        };
    });