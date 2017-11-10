'use strict';

angular.module('magicBus')
.config(function($translateProvider) {

	$translateProvider.useSanitizeValueStrategy(null);

	$translateProvider.translations('en', {
		"my_personal_information": "My Personal Information",
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
		"historic_travels": "Historic Travels",
		"new_travels_for_childs": "New Travels For Childs",
		"pending_travels_for_childs": "Pending Travels For Childs",
		"modify_travel_occasional" : "Modify Travel Occasional",
		"log_out": "Log Out",
		"es": "SPA",
		"en": "ENG",
		"footer": "Magic Bus is an application made under the authority of Francioni - Mancuso Company",
   		"google_sign_in": "Sign in with Google",
		"email": "EMAIL",
		"create_new_child": "Create New Child",
		"surname": "SURNAME",
		"name": "NAME",
		"document": "DOCUMENT",
		"age": "AGE",
		"address": "ADDRESS",
		"telephone": "TELEPHONE",
		"celphone": "CELPHONE",
		"prepaid_medicine": "PREPAID MEDICINE",
		"create": "CREATE",
		"pending_travels": "Pending Travels",
		"destination": "DESTINATION",
		"date": "DATE",
		"scheduler": "SCHEDULER",
		"driver": "DRIVER",
		"details": "DETAILS",
		"modify": "MODIFY",
		"delete": "DELETE",
		"license": "LICENSE",
		"registered_drivers": "Registered Drivers",
		"save": "SAVE",
		"modify_child": "MODIFY CHILD",
		"modify_driver": "MODIFY DRIVER",
		"create_new_driver": "CREATE NEW DRIVER",
		"modify_profile": "MODIFY PROFILE",
		"accept": "ACCEPT",
		"create_new_travel": "Create New Travel",
		"pending_parents": "Pending Parents",
		"registered_parents": "Registered Parents",
		"registered_childs": "Registered Childs",
		"days_of_week": "DAYS OF WEEK",
		"date_from": "DATE FROM",
		"date_until": "DATE UNTIL",
		"Please enter a valid mail, email@example.com":"Please enter a valid mail, email@example.com",
		"Please enter an email":"Please enter an email",
		"Please enter a name":"Please enter a name",
		"Please enter a surname":"Please enter a surname",
		"Please enter a document":"Please enter a document",
		"Please enter less than 8 numbers": "Please enter less than 8 numbers",
		"Please enter a age":"Please enter a age",
		"Please enter at least 2 numbers":"Please enter at least 2 numbers",
		"Please enter a address":"Please enter a address",
		"Please enter a telephone":"Please enter a telephone",
		"Please enter a celphone":"Please enter a celphone",
		"Please enter a prepaidMedicine":"Please enter a pregnancyMedicine",
		"Please enter at least a number":"Please enter at least a number",
		"Please enter less than 2 numbers": "Please enter less than 2 numbers",
		"Please enter at least 7 numbers": "Please enter at least 7 numbers",
		"Please enter at least 8 numbers":"Please enter at least 8 numbers",
		"Please enter a license":"Please enter a license",
		"select_childs": "SELECT CHILDS",
		"Ups! Can not enter the site": "Ups! Can not enter the site",
		"<strong>Well done!</strong> Parent added successfully." : "<strong>Well done!</strong> Parent added successfully.",
		"<strong>Ups!</strong> Pending parents could not be obtained." : "<strong>Ups!</strong> Pending parents could not be obtained.",
		"<strong>Ups! </strong> This travel has not kids assigned" : "<strong>Ups! </strong> This travel has not kids assigned",
		"<strong>Ups!</strong> Drivers could not be obtained." : "<strong>Ups!</strong> Drivers could not be obtained.",
		"<strong>Well done! </strong> The driver is deleted correctly." : "<strong>Well done! </strong> The driver is deleted correctly.",
		"<strong>Ups! </strong> Try again, the driver cannot delete this driving on a trip." : "<strong>Ups! </strong> Try again, the driver cannot delete this driving on a trip.",
		"<strong>Ups!</strong> Historical travels could not be obtained." : "<strong>Ups!</strong> Historical travels could not be obtained.",
		"<strong>Ups!</strong> Driver could not be obtained." : "<strong>Ups!</strong> Driver could not be obtained.",
		"<strong>Well done! </strong> The driver is modified correctly." : "<strong>Well done! </strong> The driver is modified correctly.",
		"<strong>Ups! </strong> Try again, the driver is not modified correctly." : "<strong>Ups! </strong> Try again, the driver is not modified correctly.",
		"<strong>Well done! </strong> The travel is modified correctly." : "<strong>Well done! </strong> The travel is modified correctly.",
		"<strong>Ups! </strong> Try again, the travel is not modified correctly." : "<strong>Ups! </strong> Try again, the travel is not modified correctly.",
		"<strong>Well done! </strong> The driver is created correctly." : "<strong>Well done! </strong> The driver is created correctly.",
		"<strong>Ups!</strong> Childs could not be obtained." : "<strong>Ups!</strong> Childs could not be obtained.",
		"<strong>Well done! </strong> The travel is save correctly." : "<strong>Well done! </strong> The travel is save correctly.",
		"<strong>Ups! </strong> Try again, the travel is not save correctly." : "<strong>Ups! </strong> Try again, the travel is not save correctly.",
		"<strong>Ups!</strong> Registered parents could not be obtained." : "<strong>Ups!</strong> Registered parents could not be obtained.",
		"<strong>Well done! </strong> The Parent is deleted correctly." : "<strong>Well done! </strong> The Parent is deleted correctly.",
		"<strong>Ups! </strong> Try again, the parent is not deleted correctly.": "<strong>Ups! </strong> Try again, the parent is not deleted correctly.",
		"<strong>Ups!</strong> Pending travels could not be obtained." : "<strong>Ups!</strong> Pending travels could not be obtained.",
		"<strong>Ups!</strong> Registered Childs could not be obtained." : "<strong>Ups!</strong> Registered Childs could not be obtained.",
		"<strong>Well done! </strong> The travel is charge correctly." : "<strong>Well done! </strong> The travel is charge correctly.",
		"<strong>Ups!</strong> Travel could not be charge." : "<strong>Ups!</strong> Travel could not be charge.",
		"<strong>Well done! </strong> The profile is modified correctly." : "<strong>Well done! </strong> The profile is modified correctly.",
		"<strong>Ups! </strong> Try again, the profile is not modified correctly." : "<strong>Ups! </strong> Try again, the profile is not modified correctly.",
		"<strong>Well done! </strong> The child is deleted to this travel correctly." : "<strong>Well done! </strong> The child is deleted to this travel correctly.",
		"<strong>Ups! </strong> Try again, the child is not deleted correctly." : "<strong>Ups! </strong> Try again, the child is not deleted correctly.",
		"<strong>Well done! </strong> The child is modified correctly." : "<strong>Well done! </strong> The child is modified correctly.",
		"<strong>Ups! </strong> Try again, the child is not modified correctly." : "<strong>Ups! </strong> Try again, the child is not modified correctly.",
		"<strong>Well done! </strong> The child is deleted correctly." : "<strong>Well done! </strong> The child is deleted correctly.",
		"<strong>Ups! </strong> Try again, the child can not be delete is on an active trip." : "<strong>Ups! </strong> Try again, the child is not deleted correctly.",
		"<strong>Well done!</strong> Child added successfully." : "<strong>Well done!</strong> Child added successfully.",
		"<strong>Ups! </strong> Try again, the child is not save correctly." : "<strong>Ups! </strong> Try again, the child is not save correctly.",
		"Choose the driver" : "Choose the driver",
		"My_childrens_pending_travels" : "My_childrens_pending_travels",
		"All_sons" : "All_sons",
		"Add_travel_to_a_child" : "Add_travel_to_a_child",
		"<strong>Ups!</strong> The travel can not be charged, because the son has been charged for this travel." : "<strong>Ups!</strong> The travel can not be charged, because the son has been charged for this travel.",
	});

	var language = (navigator.language || navigator.browserLanguage).split('-')[0];
    $translateProvider.preferredLanguage(language);
});