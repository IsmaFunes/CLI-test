function workspaceSummarySection() {
    SsCore.blocksManager
        .block('frmformNameUpperCamelCase.summarySection', summarySection);

    function summarySection() {

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
            title: 'Summary Section',
            caption: ''
        }

        section.controls = [
			{
			    controlType: 'fpTilesContainer',
			    tilesContainerSettings: tilesContainerSettings()
			}
        ];

        return section;

        function tilesContainerSettings() {

            let data = {
                items: [
					{
					    type: '',  // standard | kpi | query
					    title: '',
					    caption: '',
					    ssDataContext: {
					        queryName: '',
					    },
					    valueExpr: '',
					    // valueFilter: '',  // optional ssCore filter to apply to the obtained value
					    heightRatio: 1,
					    widthRatio: 3,
					    color: 'blue',
					    icon: 'fa fa-bar-chart-o',
					},
                ]
            }

            return data;
        };
    };
}

export default workspaceSummarySection;