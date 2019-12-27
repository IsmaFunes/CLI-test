function workspaceChartsSection() {
    SsCore.blocksManager
        .block('frmformNameUpperCamelCase.chartsSection', chartsSection);
         
    function chartsSection() {
 
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
                container: [
                    {
                        controlType: 'fpGnosisChart',
                        chartSettings: chartSettings()
                    },
                ]
            }
        ]; 
         
        return section;
 
        function chartSettings() {
 
            let data = {
                ssDataContext: {
                    queryName: '',
                },
                series: {
                    // argumentField: '',
                    // valueField: '',
                    name: '',
                    type: 'bar',
                    color: '#ffaa66'
                },
                size: {
                    height: 300
                },
                legend: {
                    visible: false
                }
            };
 
            return data;
 
        }
    };
}

export default workspaceChartsSection;
