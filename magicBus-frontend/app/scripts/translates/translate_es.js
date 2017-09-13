'use strict';

angular.module('magicBus')
.config(function($translateProvider) {

	$translateProvider.translations('es', {
   		"google_sign_in": "Acceder con Google",
   		"create_client": " crear cliente ",
   		"see_map": "ver mapa "
	});
});