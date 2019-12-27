function basicFormDef() {
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
            toolbar: SsCore.blocksManager.getBlock('frmformNameUpperCamelCase.toolbarSection'), // TOOLBAR SECTION (optional)
            content: SsCore.blocksManager.getBlock('frmformNameUpperCamelCase.contentSection'), // CONTENT SECTION (**mandatory**)
        }

        // PATTERN
        return getNewForm_basic(form);
    };
}

function basicFormMain() {
    SsCore.blocksManager
        .block('frmformNameUpperCamelCase.mainSection', function () {

            return {
                // optional settings:
                // controller: 'formNameUpperCamelCaseController'
                // The basic pattern does not have any classes. Use this property to set the needed classes (eg. 'portlet light')
                // options: {
                //     patternClass= ''
                // }
            };
        });
}

export {basicFormDef, basicFormMain}