function simpleListListSection() {
    SsCore.blocksManager
        .block('frmformNameUpperCamelCase.listSection', listSection);

    function listSection() {

        let section = {};

        /* only for styling when havving more than one control */

        section.cssClass = '',
        section.cssStyle = [
            {
                // any Css propertie, for example:
                //    'font-size': '16px',
                //    'color': 'red',
            }
        ]
        section.boxSettings = {
            direction: '',
        }

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
                    resourceName: '',
                    primaryKey: '',
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

export default simpleListListSection;
