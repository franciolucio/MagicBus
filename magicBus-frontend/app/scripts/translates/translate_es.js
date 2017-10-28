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
		"log_out": "Salir",
		"es": "ESP",
		"en": "ING",
		"footer": "Magic Bus es una Aplicacion hecha por Francioni - Mancuso Company",
   		"google_sign_in": "Acceder Con Google",
		"email": "EMAIL",
		"create_new_child": "CREAR NUEVO CHICO",
		"surname": "APELLIDO",
		"name": "NOMBRE",
		"document": "DOCUMENTO",
		"age": "EDAD",
		"address": "DIRECCION",
		"telephone": "TELEFONO",
		"celphone": "CELULAR",
		"pregnance_medicine": "OBRA SOCIAL",
		"create": "CREAR",
		"pending_travels": "VIAJES PENDIENTES",
		"destination": "DESTINO",
		"date": "FECHA",
		"scheduler": "HORARIO",
		"driver": "CONDUCTOR",
		"details": "DETALLES",
		"modify": "MODIFICAR",
		"delete": "ELIMINAR",
		"license": "LICENCIA",
		"registered_drivers": "CONDUCTORES REGISTRADOS",
		"save": "GUARDAR",
		"modify_child": "MODIFICAR HIJO",
		"modify_driver": "MODIFICAR CONDUCTOR",
		"create_new_driver": "CREAR NUEVO CONDUCTOR",
		"modify_profile": "MODIFICAR PERFIL",
		"accept": "ACEPTAR",
		"create_new_travel": "CREAR NUEVO VIAJE",
		"pending_parents": "PADRES PENDIENTES",
		"registered_parents": "PADRES REGISTRADOS",
		"registered_childs": "HIJOS REGISTRADOS",
		"days_of_week": "DIAS DE LA SEMANA",
		"date_from": "FECHA DESDE",
		"date_until": "FECHA HASTA",
		"Please enter a valid email":"Por favor ingrese un email valido",
		"Please enter an email":"Por favor ingrese su email",
		"Please enter a name":"Por favor ingrese su nombre",
		"Please enter a surname":"Por favor ingrese su apellido",
		"Please enter a document":"Por favor ingrese su documento",
		"Please enter a age":"Por favor ingrese su edad",
		"Please enter a address":"Por favor ingrese su domicilio",
		"Please enter a telephone":"Por favor ingrese su telefono",
		"Please enter a celphone":"Por favor ingrese su celular",
		"Please enter a pregnancyMedicine":"Por favor ingrese su obra social",		
		"Please enter less than 8 numbers": "Por favor ingrese menos de 8 números",
		"Please enter less than 2 numbers": "Por favor ingrese menos de 2 números",
		"Please enter at least 2 numbers":"Por favor ingrese al menos 2 números",
		"Please enter at least 7 numbers": "Por favor ingrese al menos 7 números",
		"Please enter at least 8 numbers": "Por favor ingrese al menos 8 números",
		"Please enter at least a number":"Por favor ingrese al menos un número",
		"select_childs": "SELECCIONAR CHICOS"
	});

	var language = (navigator.language || navigator.browserLanguage).split('-')[0];
    $translateProvider.preferredLanguage(language);
});