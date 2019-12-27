function simpleListAndDetailsNavigationSection() {
    SsCore.blocksManager
        .block('frmformNameUpperCamelCase.navigationSection', navigationSection);

    function navigationSection() {

        let section = {};
        /* Only for styling when having more than one control */

        section.cssClass = '',
            section.cssStyle = [
                {
                    // Any Css propertie, for example:
                    //    'font-size': '16px',
                    //    'color': 'red',
                }
            ]
        section.boxSettings = {
        }

        /* optional controller for the navigation section */
        // section.controller = 'formNameUpperCamelCaseNavigationSectionController';

        section.controls = [
            {
                controlType: 'fpDataGrid',
                gridSettings: gridSettings()
            }
        ];

        return section;

        function gridSettings() {

            let data = {
                ssDataContext: {
                    resourceName: '[resource]',
                    primaryKey: '[id]',
                    writingMode: 'none'
                },
                columns: [
                    /*
                    // Code block for adding fields in the field block
                    {
                        dataField: 'id',
                        dataType: 'number',
                        visible: false
                    },
                    */
                ],
            };
            return data;
        }

    };
}

module.exports = simpleListAndDetailsNavigationSection;
