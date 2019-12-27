function simpleDetailsDef() {
    SsCore.blocksManager
        .block('frmformNameUpperCamelCase', getForm_formNameLowerCamelCase);

    function getForm_formNameLowerCamelCase() {

        let formData = {};

        formData.formLocals = {
            entityInfo: {
                entityName: '[EntityName]',
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

        formData.formSource = {
            dataService: 'formNameLowerCamelCaseService',
            formName: 'frmformNameUpperCamelCase'
        }

        formData.formSource.formSections = {
            main: SsCore.blocksManager.getBlock('frmformNameUpperCamelCase.mainSection'), // MAIN (PRIMARY)
            toolbar: SsCore.blocksManager.getBlock('frmformNameUpperCamelCase.toolbarSection'), // TOOLBAR (**mandatory**)
            details: SsCore.blocksManager.getBlock('frmformNameUpperCamelCase.detailsSection'), // DETAILS SECTION (PRIMARY)
            footer: SsCore.blocksManager.getBlock('frmformNameUpperCamelCase.footerSection'), // FOOTER (optional)
        }

        // PATTERN
        return getNewForm_simpleDetails(formData);
    };
}

function simpleDetailsMainSection() {
    SsCore.blocksManager
        .block('frmformNameUpperCamelCase.mainSection', function () {

            return {
                // optional settings //
                // controller: 'formNameUpperCamelCaseController'
            };
        });

}

export {simpleDetailsDef, simpleDetailsMainSection}