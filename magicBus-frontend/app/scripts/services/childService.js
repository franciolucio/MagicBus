'use strict';

angular.module('magicBus')
    .service('childService', function (parentService, $location, validator, $http) {
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

            url: function () {
                return "http://localhost:8080/magicBus-backend/rest/";
            },

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
                if (this.checkFields(newChild)) {
                    parentService.saveNewChild(newChild)
                        .then(function (response) {
                            Materialize.toast('<strong>Well done!</strong> Child added successfully.', 2000,'green');
                            $location.path('/childRegistered');
                        },
                        function (error) {
                            Materialize.toast('<strong>Ups!</strong> Try again.', 4000,'red');
                    });
                };
            },

			checkFields: function (newChild) {
                return (validator.checkSurname(newChild.surname) && validator.checkName(newChild.name) && 
                        validator.checkDocument(newChild.document) && validator.checkAge(newChild.age) && 
                        validator.checkAddress(newChild.address)&& validator.checkEmail(newChild.email) &&
                        validator.checkTelephone(newChild.telephone) && validator.checkCelphone(newChild.celphone)&& 
                        validator.checkPregnanceMedicine(newChild.pregnanceMedicine));
            },
	
			getChildByID: function (id) {
                return $http({
                    method: 'get',
                    url: this.url() + "child/getById/" + id 
                });
            },    
        };
    });