'use strict';

angular.module('magicBus')
    .service('newChildService', function (apiService, $location) {

        var child = {
            surname: "",
            name: "",
            document: "",
            age:"",
            address: "",
            email: "",
            telephone: "",
            celphone:"",
            pregnanceMedicine: "",
            latitude: "",
            longitude: ""
        };

        var id = null;

        return {

            getId: function () {
                return id;
            },

            clear: function () {
                id = null;
                child.surname = "";
                child.name = "";
                child.document = "";
                child.age = "";
                child.address = "";
                child.email = "";
                child.telephone = "";
                child.celphone = "";
                child.pregnanceMedicine = "";
                child.latitude = "";
                child.longitude = "";
            },

            save: function (newChild) {
                apiService.saveNewChild(newChild)
                    .then(function (response) {
                        Materialize.toast('<strong>Well done!</strong> Child added successfully.', 2000);
                        $location.path('/childRegistered');
                    },
                    function (error) {
                        Materialize.toast('<strong>Ups!</strong> Try again.', 4000);
                    });
            }

          };
    });