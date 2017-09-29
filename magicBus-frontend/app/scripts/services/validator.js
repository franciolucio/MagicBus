'use strict';

angular.module('magicBus')
    .service('validator', function () {

        return {

            checkName: function (prop1) {
                if (this.checkInput(prop1)) {
                    return true
                } else {
                    Materialize.toast('<strong>Ups!</strong> Please complete name.', 4000,'red');
                    return false;
                }
            },

            checkSurname: function (prop1) {
                if (this.checkInput(prop1)) {
                    return true
                } else {
                    Materialize.toast('<strong>Ups! </strong> Please complete surname.', 4000,'red');
                    return false;
                }
            },

            checkAddress: function (prop1) {
                if (this.checkInput(prop1)) {
                    return true
                } else {
                    Materialize.toast('<strong>Ups! </strong> Please complete adddress.', 4000,'red');
                    return false;
                }
            },

            checkDocument: function (prop1) {
                if (this.verifyNumber(prop1,8)) {
                    return true
                } else {
                    Materialize.toast('<strong>Ups! </strong> Invalid document,put 8 numbers.', 4000,'red');
                    return false;
                }
            },

            checkAge: function (prop1) {
                if (this.verifyNumber(prop1,2)) {
                    return true
                } else {
                    Materialize.toast('<strong>Ups! </strong> Invalid age,put 2 numbers.', 4000,'red');
                    return false;
                }
            },

            checkEmail: function (prop1) {
                if (this.verifyEmail(prop1)) {
                    return true
                } else {
                    Materialize.toast('<strong>Ups! </strong> Invalid email, the format is me@example.com.', 4000,'red');
                    return false;
                }
            },

            checkTelephone: function (prop1) {
                if (this.verifyNumber(prop1,8)) {
                    return true
                } else {
                    Materialize.toast('<strong>Ups! </strong> Invalid telephone, put 8 numbers.', 4000,'red');
                    return false;
                }
            },

            checkCelphone: function (prop1) {
                if (this.verifyNumber(prop1,10)) {
                    return true
                } else {
                    Materialize.toast('<strong>Ups! </strong> Invalid celphone, put 10 numbers.', 4000,'red');
                    return false;
                }
            },

            checkLicense: function (prop1) {
                if (this.checkInput(prop1,6)) {
                    return true
                } else {
                    Materialize.toast('<strong>Ups! </strong> Invalid license, put 6 numbers.', 4000,'red');
                    return false;
                }
            },

             checkPregnanceMedicine: function (prop1) {
                if (this.checkInput(prop1)) {
                    return true
                } else {
                    Materialize.toast('<strong>Ups! </strong> Please complete pregnanceMedicine.', 4000,'red');
                    return false;
                }
            },

             checkDestination: function (prop1) {
                if (this.checkInput(prop1)) {
                    return true
                } else {
                    Materialize.toast('<strong>Ups!</strong> Please complete destination.', 4000,'red');
                    return false;
                }
            },

            checkDate: function (prop1) {
                if (this.checkInput(prop1)) {
                    return true
                } else {
                    Materialize.toast('<strong>Ups!</strong> Please select date.', 4000,'red');
                    return false;
                }
            },

            checkScheduler: function (prop1) {
                if (this.checkInput(prop1)) {
                    return true
                } else {
                    Materialize.toast('<strong>Ups!</strong> Please select scheduler.', 4000,'red');
                    return false;
                }
            },

            checkDriver: function (prop1) {
                if (this.checkInput(prop1)) {
                    return true
                } else {
                    Materialize.toast('<strong>Ups!</strong> Please select driver.', 4000,'red');
                    return false;
                }
            },

            checkInput: function (prop) {
                return prop != null && prop != undefined && prop != "";
            },

             verifyNumber: function (prop,number) {
                return prop != null && prop != undefined && prop.length == number;
            },

            verifyEmail: function (prop) {
                var mail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
                return prop != null && prop != undefined && prop == mail;
            },
        };
    });