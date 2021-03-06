'use strict';

angular.module('magicBus')
.config(function($translateProvider) {

	$translateProvider.translations('es', {
   		"my_personal_information": "Mi Informacion Personal",
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
		"travels_for": "VIAJES PARA ",
		"registered": "Registrados",
		"travels_for_today": "Viajes Del Dia",
		"historic_travels": "Viajes Historicos",
		"parents": "Padres",
		"childs": "Hijos",
		"new_travels_for_childs": "Nuevo Viaje Para Hijo",
		"modify_travel_occasional" : "Modificar Viaje Ocasional",
		"pending_travels_for_childs": "Viajes Pendientes Para Hijos",
		"log_out": "Salir",
		"es": "ESP",
		"en": "ING",
		"footer": "Magic Bus es una Aplicacion hecha por Francioni - Mancuso Company",
   		"google_sign_in": "Acceder Con Google",
		"email": "EMAIL",
		"create_new_child": "Crear Nuevo Chico",
		"travel_for_today": "Viaje del Dia",
		"travel_trip": "RECORRIDO DEL VIAJE",
		"details_of_travel": "Detalles Del Viaje",
		"surname": "APELLIDO",
		"name": "NOMBRE",
		"document": "DOCUMENTO",
		"age": "EDAD",
		"address": "DIRECCION",
		"child": "HIJO",		
		"telephone": "TELEFONO",
		"celphone": "CELULAR",
		"prepaid_medicine": "OBRA SOCIAL",
		"create": "CREAR",
		"pending_travels": "Viajes Pendientes",
		"destination": "DESTINO",
		"date": "FECHA",
		"scheduler": "HORARIO",
		"driver": "CONDUCTOR",
		"details": "DETALLES",
		"modify": "MODIFICAR",
		"delete": "ELIMINAR",
		"license": "LICENCIA",
		"registered_drivers": "Conductores Registrados",
		"save": "GUARDAR",
		"modify_child": "Modificar Hijo",
		"modify_driver": "Modificar Conductor",
		"create_new_driver": "Crear Nuevo Conductor",
		"modify_profile": "Modificar Perfil",
		"accept": "ACEPTAR",
		"create_new_travel_Occasional": "Nuevo Viaje Ocasional",
		"create_new_travel_Diary" : " Nuevo Viaje Diario",
		"pending_parents": "Padres Pendientes",
		"registered_parents": "Padres Registrados",
		"registered_childs": "Hijos Registrados",
		"days_of_week": "DIAS DE LA SEMANA",
		"date_from": "FECHA DESDE",
		"date_until": "FECHA HASTA",
		"init_travel": "VIAJE INICIADO",
		"finish_travel": "VIAJE TERMINADO",
		"map": "MAPA",
		"messages": "MENSAJES",
		"send": "ENVIAR",
		"childs_for_travel": "CHICOS QUE VIAJAN",
		"Please enter an email":"Por favor ingrese su email",
		"Please enter a valid mail, email@example.com":"Por favor ingrese su email, email@gmail.com",
		"Please enter a name":"Por favor ingrese su nombre",
		"Please enter a surname":"Por favor ingrese su apellido",
		"Please enter a document":"Por favor ingrese su documento",
		"Please enter a age":"Por favor ingrese su edad",
		"Please enter an address":"Por favor ingrese su domicilio",
		"Please enter a telephone":"Por favor ingrese su telefono",
		"Please enter a celphone":"Por favor ingrese su celular",
		"Please enter a prepaidMedicine":"Por favor ingrese su obra social",		
		"Please enter less than 8 numbers": "Por favor ingrese menos de 8 números",
		"Please enter less than 2 numbers": "Por favor ingrese menos de 2 números",
		"Please enter at least 2 numbers":"Por favor ingrese al menos 2 números",
		"Please enter at least 7 numbers": "Por favor ingrese al menos 7 números",
		"Please enter at least 8 numbers": "Por favor ingrese al menos 8 números",
		"Please enter at least a number":"Por favor ingrese al menos un número",
		"Please enter a license":"Por favor ingrese su licencia de conducir",
		"select_childs": "SELECCIONAR CHICOS",
		"Ups! Can not enter the site": "No se puede entrar a la aplicacion",
		"<strong>Well done!</strong> Parent added successfully.": " <strong>¡Bien hecho!</strong> El padre se agregó correctamente.",
		"<strong>Ups!</strong> Pending parents could not be obtained.": "<strong> ¡Ups! </ strong> No se pudieron obtener los padres pendientes.",
		"<strong>Ups! </strong> This travel has not kids assigned" : "<strong> ¡Ups! </ strong> Este viaje no tiene hijos asignados",
		"<strong>Ups!</strong> Drivers could not be obtained." : "<strong> ¡Ups! </ strong> No se pudieron obtener los conductores.",
		"<strong>Well done! </strong> The driver is deleted correctly.": "<strong> ¡Bien hecho! </ strong> El conductor se borró correctamente.",
		"<strong>Ups! </strong> Try again, the driver cannot delete this driving on a trip." : "<strong> ¡Ups! </ strong> Inténtelo de nuevo, el conductor no puede ser eliminado esta conduciendo en un viaje.",
		"<strong>Ups!</strong> Historical travels could not be obtained." : "<strong> ¡Ups! </ strong> No se pudieron obtener viajes históricos.",
		"<strong>Ups!</strong> Driver could not be obtained." : "<strong> ¡Ups! </ strong> No se pudo obtener el conductor.",
		"<strong>Well done! </strong> The driver is modified correctly." : "<strong> ¡Bien hecho! </ strong> El conductor se ha modificado correctamente.",
		"<strong>Ups! </strong> Try again, the driver is not modified correctly.": "<strong> ¡Ups! </ strong> Inténtalo de nuevo, el conductor no se ha modificado correctamente.",
		"<strong>Well done! </strong> The travel is modified correctly." : "¡Bien hecho! </ strong> El viaje se modificó correctamente.",
		"<strong>Ups! </strong> Try again, the travel is not modified correctly." : "<strong> ¡Ups! </ strong> Inténtalo de nuevo, el viaje no se ha modificado correctamente.",
		"<strong>Well done! </strong> The driver is created correctly." : "<strong> ¡Bien hecho! </ strong> El conductor se creó correctamente.",
		"<strong>Ups!</strong> Childs could not be obtained." : "<strong> ¡Ups! </ strong> No se pudo obtener a los chicos.",
		"<strong>Well done! </strong> The travel is save correctly." : "<strong> ¡Bien hecho! </ strong> El viaje se guarda correctamente.",
		"<strong>Ups! </strong> Try again, the travel is not save correctly." : "<strong> ¡Ups! </ strong> Inténtelo de nuevo, el viaje no se guarda correctamente.",
		"<strong>Ups!</strong> Registered parents could not be obtained." : "<strong> ¡Ups! </ strong> No se pudieron obtener los padres registrados.",
		"<strong>Well done! </strong> The Parent is deleted correctly." : "<strong> ¡Bien hecho! </ strong> El padre se eliminó correctamente.",
		"<strong>Ups! </strong> Try again, the parent is not deleted correctly." : "<strong> ¡Ups! </ strong> Inténtalo de nuevo, el padre no se borró correctamente.",
		"<strong>Ups!</strong> Pending travels could not be obtained." : "<strong> Ups! </ strong> No se pudieron obtener viajes pendientes.",
		"<strong>Ups!</strong> Registered Childs could not be obtained." : "<strong> ¡Ups! </ strong> No se pudieron obtener niños registrados.",
		"<strong>Well done! </strong> The travel is charge correctly." : "<strong> ¡Bien hecho! </ strong> El viaje se cargo correctamente.",
		"<strong>Ups!</strong> Travel could not be charge." : "<strong> ¡Ups! </ strong> Los viajes no pueden ser cargados.",
		"<strong>Well done! </strong> The profile is modified correctly." : "<strong> ¡Bien hecho! </ strong> El perfil se ha modificado correctamente.",
		"<strong>Ups! </strong> Try again, the profile is not modified correctly." : "<strong> ¡Ups! </ strong> Inténtalo de nuevo, el perfil no se ha modificado correctamente.",
		"<strong>Well done! </strong> The child is deleted to this travel correctly." : "<strong> ¡Bien hecho! </ strong> El niño es eliminado de este viaje correctamente.",
		"<strong>Ups! </strong> Try again, the child is not deleted correctly." : "<strong> ¡Ups! </ strong> Inténtalo de nuevo, el niño no se borró correctamente.",
		"<strong>Well done! </strong> The child is modified correctly." : "<strong> ¡Bien hecho! </ strong> El niño fue modificado correctamente.",
		"<strong>Ups! </strong> Try again, the child is not modified correctly." : "<strong> ¡Ups! </ strong> Inténtalo de nuevo, el niño no se ha modificado correctamente.",
		"<strong>Well done! </strong> The child is deleted correctly." : "<strong> ¡Bien hecho! </ strong> El niño se borró correctamente.",
		"<strong>Ups! </strong> Try again, the child is not deleted correctly." : "<strong> ¡Ups! </ strong> Inténtalo de nuevo, el niño no puede ser eliminado está en un viaje activo.",
		"<strong>Well done!</strong> Child added successfully." : "<strong> ¡Bien hecho! </ strong> El niño se agregó con éxito.",
		"<strong>Ups! </strong> Try again, the child is not save correctly." : "<strong> ¡Ups! </ strong> Inténtalo de nuevo, el niño no se guardo correctamente.",
		"<strong>Well done! </strong> The travel is deleted correctly." : "<strong> ¡Bien hecho! </ strong> El viaje se borró correctamente.",
		"<strong>Ups! </strong> Try again, the travel is not deleted correctly." : "<strong> ¡Ups! </ strong> Inténtalo de nuevo, el viaje no se borró correctamente.",
		"Choose the driver" : "Seleccione un conductor",
		"My_childrens_pending_travels" : "Viajes pendientes de mis hijos",
		"All_sons" : "Todos los hijos",
		"Add_travel_to_a_child" : "Agregar viajes a hijo",
		"<strong>Ups!</strong> The travel can not be charged, because the son has been charged for this travel." : "<strong>Ups!</strong> El viaje no puede ser cargado, porque el hijo ha sido cargado para este viaje.",
		"<strong>Ups! </strong> This travel has not Messages assigned" : "<strong>Ups! </strong> Este viaje no tiene Mensajes asociados",
		"initTrip" : "El Micro acaba de iniciar el recorrido, su hijo sera retirado proximamente",
		"MessagelOK" : "<strong> ¡Bien hecho! </ strong> El Mensaje fue enviado correctamente.",
		"MessageWRONG" : "<strong>Ups! </strong> Inténtalo de nuevo, el Mensaje no se envio correctamente.",
		"finishTrip" : "El Micro llego a destino. Muchas Gracias por confiar en nosotros!",
		"leaveMessage" : "Escriba su mensaje..",
		"initTravelOK" : "<strong> ¡Bien hecho! </ strong> Se ha iniciado el viaje.",
		"initTravelWRONG" : "<strong>Ups! </strong> Inténtalo de nuevo, no se ha podido iniciar el viaje.",
		"finishTravelOK" : "<strong>¡Bien hecho! </strong> Se ha finalizado el viaje.",
		"finishTravelWRONG" : "<strong>Ups! </strong> Inténtalo de nuevo, no se ha podido finalizar el viaje.",
		"<strong>Ups! </strong> Try again, the child can not be delete is on an active trip." : "<strong> ¡Ups! </ strong> Inténtalo de nuevo, el niño no puede ser eliminado está en un viaje activo.",
		"Please enter a destination" : "Por favor ingrese un destino",
		"Please enter a date" : "Por favor ingrese una fecha",
		"Please enter a scheduler" : "Por favor ingrese un horario",
		"Please select a driver" : "Por favor seleccione un conductor",
		"carryChild" : " ha sido retirado del domicilio",
		"Monday" : "Lunes",
		"Tuesday" : "Martes",
		"Wednesday" : "Miercoles",
		"Thursday" : "Jueves",
		"Friday" : "Viernes",
		"Saturday" : "Sabado",
		"Sunday" : "Domingo",
	});

	var language = (navigator.language || navigator.browserLanguage).split('-')[0];
    $translateProvider.preferredLanguage(language);
});



		