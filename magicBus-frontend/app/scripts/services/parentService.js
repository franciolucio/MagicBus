'use strict';

angular.module('magicBus')
    .service('parentService', function ($http, userService) {

        return {

                url: function () {
                return "http://localhost:8080/magicBus-backend/rest/";
            },

            logIn: function () {
                var email = userService.getEmail();
                return $http({
                    method: 'get',
                    url: this.url() + "parent/logIn/" + email
                });
            },

            acceptModify: function (user) {
                return $http({
                    method: 'put',
                    url: this.url() + "parent/profile/" +   user.id + "/" + 
                                                            user.surname + "/" + 
                                                            user.name + "/" + 
                                                            user.document + "/" + 
                                                            user.age + "/" + 
                                                            user.address + "/" + 
                                                            user.email + "/" + 
                                                            user.telephone + "/" + 
                                                            user.celphone
                });
            },

            saveNewChild: function (newChild) {
                var id = userService.getId();
                return $http({
                    method: 'post',
                    url: this.url() + "parent/add/" +   id + "/" + 
                                                        newChild.surname + "/" + 
                                                        newChild.name + "/" + 
                                                        newChild.document + "/" + 
                                                        newChild.age + "/" + 
                                                        newChild.address + "/" + 
                                                        newChild.email + "/" + 
                                                        newChild.telephone + "/" + 
                                                        newChild.celphone + "/" +  
                                                        newChild.prepaidMedicine + "/" +  
                                                        newChild.latitude + "/" +  
                                                        newChild.longitude
                });
            },

            getRegisteredChildsByID: function (id) {
                return $http({
                    method: 'get',
                    url: this.url() + "parent/allByID/" + id
                });
            },


            getRegisteredParents: function () {
                return $http({
                    method: 'get',
                    url: this.url() + "parent/allRegisteredParents" 
                });
            },

            getPendingParents: function () {
                return $http({
                    method: 'get',
                    url: this.url() + "parent/allPendingParents" 
                });
            },

            acceptParent: function (id) {
                return $http({
                    method: 'put',
                    url: this.url() + "parent/enable"  + "/" + id
                });
            },

            deleteParent: function (id) {
                return $http({
                    method: 'delete',
                    url: this.url() + "parent/deleteParent/" + id
                });
            },
        };
    });