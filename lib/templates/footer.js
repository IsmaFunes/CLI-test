function footer() {
    SsCore.blocksManager
        .block('frmformNameUpperCamelCase.footerSection', footerSection);
         
    function footerSection() {
 
        let section = {};
        // header and/or footer are optional sections in many patterns. Enable it if needed
 
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
        section.controls = footerSectionControls();
 
        function footerSectionControls() {
            let data = [
                {
                    controlType: 'fpString',
                    text: '<h1>Hello World! I'm a Footer</h1>',
               {
            ]
            return data;
        }
        */
    };
}

export default footer;
