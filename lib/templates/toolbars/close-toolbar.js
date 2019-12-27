function closeToolbar () {
    SsCore.blocksManager
        .block('frmformNameUpperCamelCase.toolbarSection', toolbarSection);

    function toolbarSection() {

        let section = {};
        section.cssClass = '',
        section.cssStyle = [
            {
                // Any Css propertie, for example:
                //    'font-size': '16px',
                //    'color': 'red',
            }
        ]
        section.boxSettings = {
            direction: '',
        }
        section.controls = [
            {
                controlType: 'fpToolbar',
                toolbarSettings: toolbarSettings()
            }
        ];

        return section;

        function toolbarSettings() {

            let data = SsCore.blocksManager.getBlock('ctrlToolbar.close');

            /*
            // code block for adding a menu in the toolbar
             
            data.dataSource.push({
                location: 'before',
                locateInMenu: 'auto',
                widget: 'ssMenu',
                options: {
                    dataSource: menuAdditional(),
                    displayExpr: 'text'
                }
            });
 
            function menuAdditional() {
                let data = [{
                    text: "Additional Functions",
                    items: [
                        {
                            text: "Text Additional"
                        },
                    ]
                }];
                return data;
            }
            */

            return data;

        }
    };
}

export default closeToolbar;