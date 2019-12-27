function detailsSectionController() {
    'use strict';

    angular
        .module('AngularModuleName')
        .controller('formNameUpperCamelCaseDetailsSectionController', formNameUpperCamelCaseDetailsSectionController);

    formNameUpperCamelCaseDetailsSectionController.$inject = ['$scope', 'vm', 'ss-core.ssCoreService', 'formMessages', 'formModes', 'APPSETTINGS'];

    /* @ngInject */
    function formNameUpperCamelCaseDetailsSectionController($scope, vm, ssCoreService, formMessages, formModes, APPSETTINGS) {

        // Get Record Title method
        vm.getRecordTitle = getRecordTitle;

        function getRecordTitle() { }
    }
}

export default detailsSectionController;