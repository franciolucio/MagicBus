'use strict';

angular.module('magicBus')
    .service('travelService', function ($http,$location,validator) {


        var travel = {
            destination: "",
            date: new Date(),
            scheduler: new Date(),
            driver: "",
        };

        return {

                url: function () {
                return "http://localhost:8080/magicBus-backend/rest/";
            },

            clear: function () {
                travel.destination = "";
                travel.date = new Date();
                travel.scheduler = new Date();
                travel.driver = "";
            },

            get: function () {
                return travel;
            },

            save: function (newTravel) {
                travel = newTravel;
                if (this.checkFields(newTravel)) {
                    this.saveNewTravel(newTravel)
                        .then(function (response) {
                            Materialize.toast('<strong>Well done!</strong> Travel added successfully.', 2000,'green');
                            $location.path('/travels');
                        },
                        function (error) {
                            Materialize.toast('<strong>Ups!</strong> Try again.', 4000,'red');
                    });
                }
            },

            getPendingTravels: function () {
                return $http({
                    method: 'get',
                    url: this.url() + "travel/allPendingTravels" 
                });
            },

            getPendingTravelsForADate: function (date) {
                return $http({
                    method: 'get',
                    url: this.url() + "travel/allPendingTravelsForADate/" + this.dateUrl(date)
                });
            },

            getTravelById: function (travelID) {
                return $http({
                    method: 'get',
                    url: this.url() + "travel/byId/" + travelID
                });
            },

            chargeTravel: function (travelID, childID) {
                return $http({
                    method: 'post',
                    url: this.url() + "travel/addChildForATravel/" +    travelID + "/" + 
                                                                        childID
                });
            },

            getHistoricTravels: function () {
                return $http({
                    method: 'get',
                    url: this.url() + "travel/allHistoricTravels" 
                });
            },

            dateUrl: function (date) {
                return date.getDate() + "/" + (date.getMonth() + + 1) + "/" + date.getFullYear();
            },

            timeUrl: function (time) {
                return time.getHours() + "/" + time.getMinutes();
            },

            saveNewTravelOccasional: function (newTravel) {
                travel = newTravel;
                return $http({
                    method: 'post',
                    url: this.url() + "travel/addTravelOccasional/" +   travel.destination + "/" + 
                                                                        travel.address + "/" + 
                                                                        this.dateUrl(travel.date) + "/" + 
                                                                        this.timeUrl(travel.scheduler) + "/" + 
                                                                        travel.driver + "/" + 
                                                                        travel.latitude + "/" + 
                                                                        travel.longitude
                });
            },
			
            checkFields: function (newTravel) {
                return (validator.checkDestination(newTravel.destination) /*&& validator.checkDate(newTravel.date)*/ &&
                        validator.checkScheduler(newTravel.scheduler) /*&& validator.checkDriver(newTravel.driver)*/);
            },

            deleteTravel: function (id) {
                return $http({
                    method: 'delete',
                    url: this.url() + "travel/deleteTravel/" + id
                });
            },

            acceptModifyTravel: function (travelModify) {
                return $http({
                    method: 'put',
                    url: this.url() + "travel/profile/" +   travelModify.destination + "/" + 
                                                            travelModify.address + "/" + 
                                                            this.dateUrl(travelModify.date) + "/" + 
                                                            this.timeUrl(travelModify.scheduler) + "/" + 
                                                            travelModify.driver + "/" + 
                                                            travelModify.latitude + "/" + 
                                                            travelModify.longitude
                });
            },

            saveAssist: function (tags, idTravel) {
                return $http({
                    method: 'put',
                    url: this.url() + "travel/saveAssist/" +    tags + "/" +                                        
                                                                idTravel
                });
            },

		    getPendingTravelsForAChild: function (idChild) {
                return $http({
                    method: 'get',
                    url: this.url() + "travel/allPendingTravelsForAChild/" + idChild
                });
            },

            getChildsOfTravel: function (idTravel) {
                return $http({
                    method: 'get',
                    url: this.url() + "travel/childOfTravel/" + idTravel
                });
            },

            deleteChildForTravel: function (idChild,idTravel) {
                return $http({
                    method: 'delete',
                    url: this.url() + "travel/deleteChildForTravel/" + idChild + "/" + idTravel
                });
            },
        };
    });