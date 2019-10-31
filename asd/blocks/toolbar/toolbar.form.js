(function () {
        SsCore.blocksManager
            .block('frmAsd.toolbarSection', function () {

                return {
                    controlType: 'fpToolbar',
                    toolbarSettings: SsCore.blocksManager.getBlock('ctrlToolbar.close')
                };
            });
    })();