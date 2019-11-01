function standardEntityToolbar() {
    SsCore.blocksManager
        .block('frmformNameUpperCamelCase.toolbarSection', function () {

            return {
                controls: [
                    {
                        controlType: 'fpToolbar',
                        toolbarSettings: SsCore.blocksManager.getBlock('ctrlToolbar.standardEntity')
                    }
                ]
            };
        });
}

module.exports = standardEntityToolbar;
