'use strict';

angular.module('magicBus')
    .service('apiService', function ($http, userService) {

        var auth = {};

        return {

                url: function () {
                return "http://localhost:8080/magicBus-backend/rest/";
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

            saveConductor: function (newConductor) {
                return $http({
                    method: 'get',
                    url: this.url() + "user/add/" + newConductor.name + "/" + newConductor.surname + "/" + newConductor.email + "/" + newConductor.age + "/" + newConductor.address 
                });
            },

            logIn: function () {
                return $http({
                    method: 'get',
                    url: this.url() + "user/logIn/" + userService.getEmail()
                });
            },

        };
    });