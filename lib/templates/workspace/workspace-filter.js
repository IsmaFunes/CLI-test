 function workspaceFilterSection() {
    SsCore.blocksManager
        .block('frmformNameUpperCamelCase.filterSection', filterSection);
		
    function filterSection() {

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

        section.controls = [
			{
			    controlType: 'fpFilterBlock',
			    fields: [
				{
				    key: '',
				    type: 'afSelectBox',
				    templateOptions: {
				        configOptions: {
				            ssDataContext: {
				                resourceName: ''
				            },
				            valueExpr: '',     
				            displayExpr: '',
				            tableName: '',
				            fieldName: '',
				            showClearButton: true
				        }
				    },
				},
			    ]
			}
        ];  
		
        return section;
    };
}

export default workspaceFilterSection;
