'use strict';

angular.module('magicBus')
    .service('driverService', function ($http, $location,$window) {

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
                        Materialize.toast('<strong>Well done!</strong> Driver added successfully.', 2000,'green');
                        $window.location.href = '/#/drivers';
                    },
                    function (error) {
                        Materialize.toast('<strong>Ups!</strong> Try again.', 4000,'red');
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
        };
    });