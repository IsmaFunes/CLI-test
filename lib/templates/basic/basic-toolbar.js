//Toolbars
function basicToolbar() {
    SsCore.blocksManager
        .block('frmformNameUpperCamelCase.toolbarSection', function () {

            return {
                controlType: 'fpToolbar',
                toolbarSettings: SsCore.blocksManager.getBlock('ctrlToolbar.close')
            };
        });
}

module.exports = {
    basicToolbar
};