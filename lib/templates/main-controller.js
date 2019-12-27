function mainController() {
    'use strict';

    angular
        .module('AngularModuleName')
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

export default mainController;