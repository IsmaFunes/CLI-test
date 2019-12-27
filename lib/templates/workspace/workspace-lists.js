function workspaceListsSection() {
    SsCore.blocksManager
        .block('frmformNameUpperCamelCase.listsSection', listsSection);

    function listsSection() {

        let section = {};
        /* only for styling when havving more than one control */

        section.cssClass = '',
            section.cssStyle = [
                {
                    // any Css property, for example:
                    //    'font-size': '16px',
                    //    'color': 'red',
                }
            ]
        section.boxSettings = {
            direction: '',
        }

        section.options = {
            title: 'Lists Section',
            caption: ''
        }

        section.controls = [
            {
                controlType: 'fpMultiPanel',
                container: [
                    {
                        controlType: 'fpMultiPanelPage',
                        multiPanelPageSettings: {
                            title: '',
                        },
                        container: [
                            {
                                controlType: 'fpGroup',
                                container: [
                                    {
                                        controlType: 'fpGnosisGrid',
                                        gridSettings: gridSettings()
                                    }
                                ]
                            },
                        ]
                    },
                ]
            }
        ];

        return section;

        function gridSettings() {

            let data = {
                ssDataContext: {
                    queryName: '',
                },
            };

            return data;

        }
    }
}

export default workspaceListsSection;