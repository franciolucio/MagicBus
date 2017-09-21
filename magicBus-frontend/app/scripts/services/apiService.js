'use strict';

angular.module('magicBus')
    .service('apiService', function ($http, userService) {

        var auth = {};

        return {

                url: function () {
                return "http://localhost:8080/magicBus-backend/rest/";
            },

            logIn: function () {
                return $http({
                    method: 'get',
                    url: this.url() + "user/logIn/" + userService.getEmail()
                });
            },

            getUsers: function () {
                return $http({
                    method: 'get',
                    url: this.url() + "user/allUsers" 
                });
            },

            getProfile: function () {
                return $http({
                    method: 'get',
                    url: this.url() + "user/profile/" + userService.getEmail()
                });
            },

            getDrivers: function () {
                return $http({
                    method: 'get',
                    url: this.url() + "driver/allDrivers" 
                });
            },

            saveNewDriver: function (newDriver) {
                return $http({
                    method: 'get',
                    url: this.url() + "driver/add/" +   newDriver.surname + "/" + 
                                                        newDriver.name + "/" + 
                                                        newDriver.document + "/" + 
                                                        newDriver.age + "/" + 
                                                        newDriver.address + "/" + 
                                                        newDriver.email + "/" + 
                                                        newDriver.telephone + "/" + 
                                                        newDriver.celphone + "/" + 
                                                        newDriver.license
                });
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
                    method: 'get',
                    url: this.url() + "travel/add/" +   newTravel.destination + "/" + 
                                                        newTravel.date + "/" + 
                                                        newTravel.schedule + "/" + 
                                                        newTravel.driver
                });
            },

            getRegisteredParents: function () {
                return $http({
                    method: 'get',
                    url: this.url() + "driver/allRegisteredParents" 
                });
            },

            getPendingParents: function () {
                return $http({
                    method: 'get',
                    url: this.url() + "driver/allPendingParents" 
                });
            },
        };
    });