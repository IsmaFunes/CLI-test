//Toolbars
    

module.exports = {
    basicToolbar: function () {
        SsCore.blocksManager
            .block('frmformNameUpperCamelCase.toolbarSection', function () {

                return {
                    controlType: 'fpToolbar',
                    toolbarSettings: SsCore.blocksManager.getBlock('ctrlToolbar.close')
                };
            });
    }
};