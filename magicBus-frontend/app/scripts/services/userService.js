'use strict';

angular.module('magicBus')
    .service('userService', function () {

        var auth = {};

        var email = "";

        var name = "";

        var imageUrl = "";

        var profile = {};

        var isLogged = false;

        return {

            setProfile: function (user) {
                profile = user;
            },

            getProfile: function () {
                return profile;
            },

            setUser: function (user) {
                email = user.email.slice(0, user.email.indexOf("@"));
                name = user.name;
                imageUrl = user.imageUrl;
                isLogged = true;
            },


            getEmail: function () {
                return email;
            },

            getName: function () {
                return name;
            },

            getImage: function () {
                return imageUrl;
            },

            isLoggedIn: function () {
                return isLogged;
            },

            logOut: function () {
                email = "";
                name = "";
                imageUrl = "";
                isLogged = false;
            },

        };
    });