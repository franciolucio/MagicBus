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

            getDrivers: function () {
                return $http({
                    method: 'get',
                    url: this.url() + "driver/allDrivers" 
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
                    url: this.url() + "driver/add/" + newConductor.name + "/" + newConductor.surname + "/" + newConductor.document
                });
            },

            saveViaje: function (newViaje) {
                return $http({
                    method: 'get',
                    url: this.url() + "viaje/add/" + newViaje.lugar + "/" + newViaje.dia + "/" + newViaje.horario + "/" + newViaje.conductor
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