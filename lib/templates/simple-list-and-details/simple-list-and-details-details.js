function simpleListAndDetailsDetailsSection() {
    SsCore.blocksManager
        .block('frmformNameUpperCamelCase.detailsSection', detailsSection);
         
    function detailsSection() {
 
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
                controlType: '',
                container: [
                    // define here one or more controls to be rendered in this section
                ]
            }
        ];
         
        return section;
         
        // controls definition example
 
        /*
        section.controls = detailsSectionControls();
 
        function detailsSectionControls() {
 
            let data = {
                controlType: 'fpMultiPanel',
                container: [
                    
                    {
                        controlType: 'fpMultiPanelPage',
                        multiPanelPageSettings: {
                            title: 'title',
                            isOpen: true,
                        },
                        container: [
                            {
                                controlType: 'fpGroup',
                                container: [
                                    {
                                     SsCore.blocksManager.getBlock('frmformNameUpperCamelCase.detailsSection.[ControlName]FieldsBlock')
                                    }
                                ]
                            },
                        ]
                    },
                ]
            };
            return data;
        }
        */
    };
}

export default simpleListAndDetailsDetailsSection;
