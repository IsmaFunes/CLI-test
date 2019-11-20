function settingsFormDef() {
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
            formName: 'frmformNameUpperCamelCase'
        }

        form.formSource.formSections = {
            main: SsCore.blocksManager.getBlock('frmformNameUpperCamelCase.mainSection'), // MAIN (PRIMARY)
            toolbar: SsCore.blocksManager.getBlock('frmformNameUpperCamelCase.toolbarSection'), // TOOLBAR (optional)
            header: SsCore.blocksManager.getBlock('frmformNameUpperCamelCase.headerSection'), // HEADER (optional)
            body: SsCore.blocksManager.getBlock('frmformNameUpperCamelCase.bodySection'), // BODY (**mandatory**)
            footer: SsCore.blocksManager.getBlock('frmformNameUpperCamelCase.footerSection'), // FOOTER (optional)
        }

        // PATTERN
        return getNewForm_settingPages(form);
    };
}

function settingsMainSection() {
    SsCore.blocksManager
        .block('frmformNameUpperCamelCase.mainSection', function () {

            return {
                // optional settings //
                // controller: 'formNameUpperCamelCaseController'
            };
        });
}


module.exports = { settingsFormDef, settingsMainSection };