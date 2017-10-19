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
   		"my_profile": "MY PROFILE",
		"email": "EMAIL",
		"create_new_child": "CREATE NEW CHILD",
		"surname": "SURNAME",
		"name": "NAME",
		"document": "DOCUMENT",
		"age": "AGE",
		"address": "ADDRESS",
		"telephone": "TELEPHONE",
		"celphone": "CELPHNE",
		"pregnance_medicine": "PREGNANCE MEDICINE",
		"create": "CREATE",
		"pending_travels": "PENDING TRAVELS",
		"destination": "DESTINATION",
		"date": "DATE",
		"scheduler": "SCHEDULER",
		"driver": "DRIVER",
		"details": "DETAILS",
		"modify": "MODIFY",
		"delete": "DELETE",
		"license": "LICENSE",
		"registered_drivers": "REGISTERED DRIVERS",
		"save": "SAVE",
		"modify_child": "MODIFY CHILD",
		"modify_driver": "MODIFY DRIVER",
		"create_new_driver": "CREATE NEW DRIVER",
		"modify_profile": "MODIFY PROFILE",
		"accept": "ACCEPT",
		"create_new_travel": "CREATE NEW TRAVEL",
		"pending_parents": "PENDING PARENTS",
		"registered_parents": "REGISTERED PARENTS",
		"registered_childs": "REGISTERED CHILDS",
	});

	var language = (navigator.language || navigator.browserLanguage).split('-')[0];
    $translateProvider.preferredLanguage(language);
});