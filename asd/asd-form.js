/* Generated code for the Basic form pattern */

(function () {
    SsCore.blocksManager
        .block('frmAsd', getForm_asd);


    function getForm_asd() {

        let form = {};

        form.formLocals = {
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

        form.formSource = {
            asd: 'frmAsd'
        }

        form.formSource.formSections = {
            main: SsCore.blocksManager.getBlock('frmAsd.mainSection'), // MAIN (PRIMARY)
            toolbar: SsCore.blocksManager.getBlock('frmAsd.toolbarSection'), // TOOLBAR SECTION (optional)
            content: SsCore.blocksManager.getBlock('frmAsd.contentSection'), // CONTENT SECTION (**mandatory**)
        }

        // PATTERN
        return angular.merge(getNewForm_basic(), form);
    };
})();

(function () {
    SsCore.blocksManager
        .block('frmAsd.mainSection', function () {

            return {
                // optional settings:
                // controller: 'AsdController'
                // The basic pattern does not have any classes. Use this property to set the needed classes (eg. 'portlet light')
                // options: {
                //     patternClass= ''
                // }
            };
        });
})();