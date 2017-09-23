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

            getUserByID: function (id) {
                return $http({
                    method: 'get',
                    url: this.url() + "user/byID/" + id
                });
            },

            getUserID: function () {
                return $http({
                    method: 'get',
                    url: this.url() + "user/userID/" + userService.getEmail() + '@gmail.com'
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

            acceptModify: function (id, user) {
                return $http({
                    method: 'get',
                    url: this.url() + "user/profile/" + id + "/" + 
                                                        user.surname + "/" + 
                                                        user.name + "/" + 
                                                        user.document + "/" + 
                                                        user.age + "/" + 
                                                        user.address + "/" + 
                                                        user.email + "/" + 
                                                        user.telephone + "/" + 
                                                        user.celphone
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

            saveNewChild: function (newChild) {
                var id = getUserID();
                return $http({
                    method: 'get',
                    url: this.url() + "parent/add/" +   id + "/" + 
                                                        newChild.surname + "/" + 
                                                        newChild.name + "/" + 
                                                        newChild.document + "/" + 
                                                        newChild.age + "/" + 
                                                        newChild.address + "/" + 
                                                        newChild.email + "/" + 
                                                        newChild.telephone + "/" + 
                                                        newChild.celphone + "/" +  
                                                        newChild.pregnancyMedicine + "/" +  
                                                        newChild.latitude + "/" +  
                                                        newChild.longitude
                });
            },

            getRegisteredChildsByID: function (id) {
                return $http({
                    method: 'get',
                    url: this.url() + "parent/allByID/" + id
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
                                                        newTravel.scheduler + "/" + 
                                                        newTravel.driver
                });
            },

            getRegisteredParents: function () {
                return $http({
                    method: 'get',
                    url: this.url() + "parent/allRegisteredParents" 
                });
            },

            getPendingParents: function () {
                return $http({
                    method: 'get',
                    url: this.url() + "parent/allPendingParents" 
                });
            },

            acceptParent: function (id) {
                return $http({
                    method: 'get',
                    url: this.url() + "parent/enable"  + "/" + id
                });
            },
        };
    });