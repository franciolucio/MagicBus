'use strict';

angular.module('magicBus')
    .controller('LanguageCtrl', function ($scope,$translate) {

      $scope.changeLanguage = function (langKey) {
      $translate.use(langKey);
    };
});