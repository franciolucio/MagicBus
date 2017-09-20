'use strict';

angular.module('magicBus')
    .service('nuevoViajeService', function (apiService) {

        var viaje = {
            lugar: "",
            dia: "",
            horario: "",
            conductor: "",
        };

        var id = null;

        return {


            getId: function () {
                return id;
            },

            clear: function () {
                id = null;
                viaje.lugar = "";
                viaje.dia = "";
                viaje.horario = "";
                viaje.conductor = "";
            },

            save: function (newViaje) {
                viaje = newViaje;
                    apiService.saveViaje(viaje)
                        .then(function (response) {
                            Materialize.toast('<strong>Well done!</strong>Viaje added successfully.', 2000);
                        },
                        function (error) {
                            Materialize.toast('<strong>Ups!</strong> Try again.', 4000);
                        });
            }

          };
    });