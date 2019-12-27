function workspaceLinksSection() {
    SsCore.blocksManager
        .block('frmformNameUpperCamelCase.linksSection', linksSection);
		

    function linksSection() {

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
            title: '',
            caption: ''
        }

        section.controls = [
			{
			    controlType: 'fpGroup',
			    collapsible: true,
			    isOpen: true,
			    title: '',
			    container: [
					{
					    text: '',
					    controlType: 'fpLink',
					    url: ''
					},
			    ]
			}
        ];  
		
        return section;

    };
}

export default workspaceLinksSection;
