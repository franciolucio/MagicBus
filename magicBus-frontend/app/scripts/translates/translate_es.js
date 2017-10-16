'use strict';

angular.module('magicBus')
.config(function($translateProvider) {

	$translateProvider.translations('es', {
   		"my_profile": "Mi Perfil",
		"travels": "Viajes",
		"new": "Nuevo",
		"occasional": "Ocasional",
		"diary": "Diario",
		"pending": "Pendientes",
		"historic": "Historial",
		"message": "Mensaje",
		"received": "Recibidos",
		"sent": "Enviados",
		"drivers": "Conductores",
		"registered": "Registrados",
		"travels_for_today": "Viajes Del Dia",
		"parents": "Padres",
		"childs": "Hijos",
		"new_travels_for_childs": "Nuevo Viaje Para Hijo",
		"pending_travels_for_childs": "Viajes Pendientes Para Hijos",
		"log_out": "SALIR",
		"es": "ESP",
		"en": "ING",
		"footer": "Magic Bus es una Aplicacion hecha por Francioni - Mancuso Company",
   		"google_sign_in": "Acceder Con Google",
	});
});