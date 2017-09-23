'use strict';

angular.module('magicBus')
    .service('newDriverService', function (apiService, $location,$window) {

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
                apiService.saveNewDriver(newDriver)
                    .then(function (response) {
                        Materialize.toast('<strong>Well done!</strong> Driver added successfully.', 2000);
                        $window.location.href = '/#/drivers';
                    },
                    function (error) {
                        Materialize.toast('<strong>Ups!</strong> Try again.', 4000);
                    });
            }

          };
    });