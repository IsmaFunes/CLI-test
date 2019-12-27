function dataService() {
    'use strict';

    angular
        .module('AngularModuleName')
        .factory('formNameLowerCamelCaseService', formNameLowerCamelCaseService);

    formNameLowerCamelCaseService.$inject = ['ss-core.proxyService'];

    function formNameLowerCamelCaseService(proxyService) {

        var formNameLowerCamelCase = function () {
            var that = this;
            proxyService.base().call(that, 'EntityName');
        }
        formNameLowerCamelCase.prototype = Object.create(proxyService.base().prototype);
        formNameLowerCamelCase.prototype.constructor = formNameLowerCamelCase;

        angular.extend(formNameLowerCamelCase.prototype, {

        });

        return new formNameLowerCamelCase;
    }
}

export default dataService;