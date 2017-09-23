'use strict';

angular.module('magicBus')
    .service('userService', function () {

        var email = "";

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

            getId: function () {
                return profile.id;
            },

            setUser: function (user) {
                email = user.email.slice(0, user.email);
                imageUrl = user.imageUrl;
                isLogged = true;
            },

            getEmail: function () {
                return email;
            },

            getImage: function () {
                return imageUrl;
            },

            isLoggedIn: function () {
                return isLogged;
            },

            logOut: function () {
                email = "";
                imageUrl = "";
                isLogged = false;
            },

        };
    });