function simpleListAndDetailsDef() {
    SsCore.blocksManager
        .block('frmformNameUpperCamelCase', getForm_formNameLowerCamelCase);

    function getForm_formNameLowerCamelCase() {

        let form = {};

        form.formLocals = {
            entityInfo: {
                entityName: 'EntityName',
            },
            securityInfo: {
                moduleName: '[ModuleName]',
                objectName: '[ObjectName]',
            },
            workflowInfo: {
            },
            dataContext: {
            },
            customData: {
            }
        };

        form.formSource = {
            dataService: 'formNameLowerCamelCaseService',
            formName: 'frmformNameUpperCamelCase'
        }

        form.formSource.formSections = {
            main: SsCore.blocksManager.getBlock('frmformNameUpperCamelCase.mainSection'),
            toolbar: SsCore.blocksManager.getBlock('frmformNameUpperCamelCase.toolbarSection'),
            navigation: SsCore.blocksManager.getBlock('frmformNameUpperCamelCase.navigationSection'),
            details: SsCore.blocksManager.getBlock('frmformNameUpperCamelCase.detailsSection'),
        }

        return getNewForm_simpleListAndDetails(form);
    }
}

function simpleListAndDetailsMainSection() {
    SsCore.blocksManager
        .block('frmformNameUpperCamelCase.mainSection', function () {

            return {
                /* optional settings */
                // controller: 'formNameUpperCamelCaseController'
            };
        });
}

module.exports = {simpleListAndDetailsDef, simpleListAndDetailsMainSection};