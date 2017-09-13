'use strict';

angular.module('magicBus')
.config(function($translateProvider) {

	$translateProvider.useSanitizeValueStrategy(null);

	$translateProvider.translations('en', {
   		"google_sign_in": "Sign in with Google",
   		"create_client": " create client",
   		"see_map": "see map"
   		
	});

	var language = (navigator.language || navigator.browserLanguage).split('-')[0];
    $translateProvider.preferredLanguage(language);
});