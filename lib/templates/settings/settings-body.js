function settingsBody() {
    SsCore.blocksManager
        .block('frmformNameUpperCamelCase.bodySection', bodySection);

    function bodySection() {

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

        // Is mandatory to have a multiPanel control in it 'pages' type as main control.
        section.controls = [
            {
                controlType: 'fpMultiPanel',
                multiPanelSettings: {
                    type: 'pages',
                    buttonSettings: {
                        // devextreme button settings here, if needed.
                    },
                },
                container: [
                    {
                        controlType: 'fpMultiPanelPage',
                        multiPanelPageSettings: {
                            title: 'Page Title 1',
                        },
                        container: [
                            {
                                controlType: 'fpString',
                                text: '<h1>Hello World! Im a page...</h1>',
                            },
                        ]
                    },
                ]
            }
        ];

        return section;
    };
}

export default settingsBody;