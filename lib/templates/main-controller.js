function mainController() {
    'use strict';

    angular
        .module('ModuleName')
        .controller('formNameUpperCamelCaseController', formNameUpperCamelCaseController);

    formNameUpperCamelCaseController.$inject = ['vm', '$scope', 'ss-core.ssCoreService', 'formModes', 'formMessages', 'ENTITY_STATES'];

    /* @ngInject */
    function formNameUpperCamelCaseController(vm, $scope, ssCoreService, formModes, formMessages, ENTITY_STATES) {

        vm.$entityName = 'EntityName';
        activate();

        ////////////////

        function activate() {
        };
    }
}

module.exports = {mainController}