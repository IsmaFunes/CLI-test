function simpleListDef() {
    SsCore.blocksManager
        .block('frmformNameUpperCamelCase', getForm_formNameLowerCamelCase);

    function getForm_formNameLowerCamelCase() {

        let formData = {};

        formData.formLocals = {
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

        formData.formSource = {
            dataService: 'formNameLowerCamelCaseService',
            formName: 'frmformNameUpperCamelCase'
        }

        formData.formSource.formSections = {
            main: SsCore.blocksManager.getBlock('frmformNameUpperCamelCase.mainSection'), // MAIN (PRIMARY)
            toolbar: SsCore.blocksManager.getBlock('frmformNameUpperCamelCase.toolbarSection'), // TOOLBAR (**mandatory**)
            list: SsCore.blocksManager.getBlock('frmformNameUpperCamelCase.listSection'), // LIST SECTION (**mandatory**)
            footer: SsCore.blocksManager.getBlock('frmformNameUpperCamelCase.footerSection'), // FOOTER (optional)
        }

        // PATTERN
        return getNewForm_simpleList(formData);
    };
}

function simpleListMainSection() {
    SsCore.blocksManager
        .block('frmformNameUpperCamelCase.mainSection', function () {

            return {
                /* optional controller for the main section */
                // controller: 'frmformNameUpperCamelCaseController'
            };
        });

}

export {simpleListDef, simpleListMainSection}