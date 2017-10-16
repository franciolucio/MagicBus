'use strict';

angular.module('magicBus')
.config(function($translateProvider) {

	$translateProvider.useSanitizeValueStrategy(null);

	$translateProvider.translations('en', {
		"my_profile": "My Profile",
		"travels": "Travels",
		"new": "New",
		"occasional": "Occasional",
		"diary": "Diary",
		"pending": "Pending",
		"historic": "Historic",
		"message": "Message",
		"received": "Received",
		"sent": "Sent",
		"drivers": "Drivers",
		"registered": "Registered",
		"travels_for_today": "Travels For Today",
		"parents": "Parents",
		"childs": "Childs",
		"new_travels_for_childs": "New Travels For Childs",
		"pending_travels_for_childs": "Pending Travels For Childs",
		"log_out": "LOG OUT",
		"es": "SPA",
		"en": "ENG",
		"footer": "Magic Bus is an application made under the authority of Francioni - Mancuso Company",
   		"google_sign_in": "Sign in with Google",
	});

	var language = (navigator.language || navigator.browserLanguage).split('-')[0];
    $translateProvider.preferredLanguage(language);
});