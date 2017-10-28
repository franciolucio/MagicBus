'use strict';

angular.module('magicBus')
    .service('childService', function (parentService, $location, $http) {
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
                    parentService.saveNewChild(newChild)
                        .then(function (response) {
                            Materialize.toast('<strong>Well done! </strong>Child added successfully', 2000,'green');
                            setTimeout(function(){$location.path('/registeredChilds');}, 5000);
                            $location.path('/registeredChilds');
                        },
                        function (error) {
                            Materialize.toast('<strong>Ups!</strong> Try again.', 4000,'red');
                    });
            },

            deleteChild: function (id) {
                return $http({
                    method: 'delete',
                    url: this.url() + "child/deleteChild/" + id
                });
            },
	
			getChildByID: function (id) {
                return $http({
                    method: 'get',
                    url: this.url() + "child/getById/" + id
                });
            },

            getAllChilds: function () {
                return $http({
                    method: 'get',
                    url: this.url() + "child/allChilds/"
                });
            },

            acceptModifyOfChild: function (child) {
                return $http({
                    method: 'put',
                    url: this.url() + "child/profile/" +    child.id + "/" + 
                                                            child.surname + "/" + 
                                                            child.name + "/" + 
                                                            child.document + "/" + 
                                                            child.age + "/" + 
                                                            child.address + "/" + 
                                                            child.email + "/" + 
                                                            child.telephone + "/" + 
                                                            child.celphone + "/" + 
                                                            child.pregnancyMedicine + "/" +  
                                                            child.latitude + "/" +  
                                                            child.longitude
                });
            },
        };
    });