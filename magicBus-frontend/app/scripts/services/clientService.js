'use strict';

angular.module('magicBus')
    .service('clientService', function (userService, apiService) {

        var conductor = {
            name: "",
            surname: "",
            email: "",
            age: "",
            address:"",
        };

        var id = null;

        return {


            getId: function () {
                return id;
            },

            clear: function () {
                id = null;
                conductor.name = "";
                conductor.surname = "";
                conductor.email = "";
                conductor.age ="";
                conductor.address="";
            },

            save: function (newConductor) {
                conductor = newConductor;
                    apiService.saveConductor(conductor)
                        .then(function (response) {
                            Materialize.toast('<strong>Well done!</strong>Conductor added successfully.', 2000);
                        },
                        function (error) {
                            Materialize.toast('<strong>Ups!</strong> Try again.', 4000);
                        });
            }

          };
    });