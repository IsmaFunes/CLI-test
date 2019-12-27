function workspaceDef() {
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
            formName: 'frmformNameUpperCamelCase'
        }

        formData.formSource.formSections = {
            // MAIN (PRIMARY)
            main: SsCore.blocksManager.getBlock('frmformNameUpperCamelCase.mainSection'),
            // TOOLBAR (mandatory)    
            toolbar: SsCore.blocksManager.getBlock('frmformNameUpperCamelCase.toolbarSection'),
            // FILTER (optional)
            filter: SsCore.blocksManager.getBlock('frmformNameUpperCamelCase.filterSection'),
            // SUMMARY (primary)
            summary: SsCore.blocksManager.getBlock('frmformNameUpperCamelCase.summarySection'),
            // LISTS (primary)
            lists: SsCore.blocksManager.getBlock('frmformNameUpperCamelCase.listsSection'),     
            // CHARTS (primary)
            charts: SsCore.blocksManager.getBlock('frmformNameUpperCamelCase.chartsSection'),   
            // LINKS (primary)
            links: SsCore.blocksManager.getBlock('frmformNameUpperCamelCase.linksSection'),
        }

        // PATTERN
        return getNewForm_workspace(formData);
    };
}

function workspaceMainSection() {
    SsCore.blocksManager
        .block('frmformNameUpperCamelCase.mainSection', function () {

            return {
                /* optional controller for the main section */
                // controller: 'formNameUpperCamelCaseController',

                //options: {
                //title: '',
                //caption: '',
                //patternClass: '',
                //layoutDirection: ''
                //}
            };
        });

}

export {workspaceDef, workspaceMainSection}
