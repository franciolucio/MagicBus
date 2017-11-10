'use strict';

angular.module('magicBus')
    .service('travelService', function ($http,$location) {


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
                    this.saveNewTravel(newTravel)
                        .then(function (response) {
                            Materialize.toast('<strong>Well done!</strong> Travel added successfully.', 2000,'green');
                            $location.path('/travels');
                        },
                        function (error) {
                            Materialize.toast('<strong>Ups!</strong> Try again.', 4000,'red');
                    });
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

            saveNewTravelDiary: function (newTravel, dateUntil, daysOfWeek, childsGo) {
                travel = newTravel;
                return $http({
                    method: 'post',
                    url: this.url() + "travel/addTravelDiary/" +    travel.destination + "/" + 
                                                                    travel.address + "/" + 
                                                                    this.dateUrl(travel.date) + "/" +
                                                                    this.timeUrl(travel.scheduler) + "/" + 
                                                                    travel.driver + "/" + 
                                                                    travel.latitude + "/" + 
                                                                    travel.longitude + "/" +
                                                                    this.dateUrl(dateUntil) + "/" +
                                                                    daysOfWeek + "/" +
                                                                    childsGo
                });
            },

            saveNewTravelOccasional: function (newTravel) {
                return $http({
                    method: 'post',
                    url: this.url() + "travel/addTravelOccasional/" +   newTravel.destination + "/" + 
                                                                        newTravel.address + "/" + 
                                                                        this.dateUrl(newTravel.date) + "/" + 
                                                                        this.timeUrl(newTravel.scheduler) + "/" + 
                                                                        newTravel.driver + "/" + 
                                                                        newTravel.latitude + "/" + 
                                                                        newTravel.longitude
                });
            },
			
            deleteTravel: function (id) {
                return $http({
                    method: 'delete',
                    url: this.url() + "travel/deleteTravel/" + id
                });
            },

            acceptModifyTravel: function (travelModify,idTravel) {
                return $http({
                    method: 'put',
                    url: this.url() + "travel/profile/" +   travelModify.destination + "/" + 
                                                            travelModify.address + "/" + 
                                                            this.dateUrl(travelModify.date) + "/" + 
                                                            this.timeUrl(travelModify.scheduler) + "/" + 
                                                            travelModify.driver + "/" + 
                                                            travelModify.latitude + "/" + 
                                                            travelModify.longitude + "/" +
                                                            idTravel
                });
            },

		    getPendingTravelsForAChild: function (idChild) {
                return $http({
                    method: 'get',
                    url: this.url() + "travel/allPendingTravelsForAChild/" + idChild
                });
            },

            getPendingTravelsForAllChilds: function (idParent) {
                return $http({
                    method: 'get',
                    url: this.url() + "travel/allPendingTravelsForAllChilds/" + idParent
                });
            },

            getChildsOfTravel: function (idTravel) {
                return $http({
                    method: 'get',
                    url: this.url() + "travel/childsOfTravel/" + idTravel
                });
            },

            getMessagesOfTravel: function (idTravel) {
                return $http({
                    method: 'get',
                    url: this.url() + "travel/messages/" + idTravel
                });
            },

            deleteChildForTravel: function (idChild,idTravel) {
                return $http({
                    method: 'delete',
                    url: this.url() + "travel/deleteChildForTravel/" + idChild + "/" + idTravel
                });
            },

             saveAssist: function (childsOfTravel, travelId) {
                return $http({
                    method: 'put',
                    url: this.url() + "travel/saveAssist/" + childsOfTravel + "/" + travelId
                });
            },
        };
    });