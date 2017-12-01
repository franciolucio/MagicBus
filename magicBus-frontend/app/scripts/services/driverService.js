'use strict';

angular.module('magicBus')
    .service('driverService', function ($http, $location, $window, $filter) {

        var driver = {
            surname: "",
            name: "",
            document: "",
            age:"",
            address: "",
            email: "",
            telephone: "",
            celphone:"",
            license: ""
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
                driver.surname = "";
                driver.name = "";
                driver.document = "";
                driver.age = "";
                driver.address = "";
                driver.email = "";
                driver.telephone = "";
                driver.celphone = "";
                driver.license = "";
            },

            save: function (newDriver) {
                    this.saveNewDriver(newDriver)
                    .then(function (response) {
                        Materialize.toast($filter('translate')('<strong>Well done! </strong> The driver is created correctly.'), 2000,'green');
                        $window.location.href = '/#/drivers';
                    });
            },

            getDrivers: function () {
                return $http({
                    method: 'get',
                    url: this.url() + "driver/allDrivers" 
                });
            },

            getDriverById: function (idDriver) {
                return $http({
                    method: 'get',
                    url: this.url() + "driver/driverById/" + idDriver
                });
            },

            saveNewDriver: function (newDriver) {
                return $http({
                    method: 'post',
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

            sendMessage: function (idDriver, idTravel, content) {
                return $http({
                    method: 'post',
                    url: this.url() + "driver/newMessage/" + idDriver + "/" + idTravel + "/" + content
                });
            },

            deleteDriver: function (idDriver) {
                return $http({
                    method: 'delete',
                    url: this.url() + "driver/deleteDriver/" + idDriver
                });
            },

            acceptModifyDriver: function (driver) {
                return $http({
                    method: 'put',
                    url: this.url() + "driver/profile/" +   driver.id + "/" + 
                                                            driver.surname + "/" + 
                                                            driver.name + "/" + 
                                                            driver.document + "/" + 
                                                            driver.age + "/" + 
                                                            driver.address + "/" + 
                                                            driver.email + "/" + 
                                                            driver.telephone + "/" + 
                                                            driver.celphone + "/" + 
                                                            driver.license
                });
            },
        };
    });