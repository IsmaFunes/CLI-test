(function () {
    angular
        .module('modules.testing-forms')
        .run(runBlock);

    runBlock.$inject = ['ss-core.ssCoreService'];

    function runBlock(ssCoreService) {

        let routerHelper = ssCoreService.routing;

        let states = [
            routerHelper.getNewState('custom', {
                name: 'dxSchedulerTest',
                parent: 'root.app.layout',
                url: '/dxSchedulerTest',
                templateUrl: '/app/modules/testing-forms/forms/scheduler-test/assets/dx-scheduler-test.html',
                controller: 'assets.dxSchedulerTestController as vm',
            }),
            routerHelper.getNewState('form', {
                formName: 'frmTestingForm4',
                title: 'Form for Testing Purposes'
            }),
            routerHelper.getNewState('form', {
                formName: 'frmTestingSldDialog',
                title: 'SL+D with Dialog support'
            }),
            routerHelper.getNewState('form', {
                formName: 'frmTestingForm5',
                title: 'Form for Testing Purposes'
            }),
            routerHelper.getNewState('form', {
                formName: 'frmTestingForm6',
                title: 'Form for Testing Purposes'
            }),
            routerHelper.getNewState('form', {
                formName: 'frmGlExport',
                title: 'Form for Testing Purposes'
            }),
            routerHelper.getNewState('form', {
                formName: 'frmBug',
                title: 'Form for Testing Purposes'
            }),
            routerHelper.getNewState('form', {
                formName: 'frmExtendedMode',
                title: 'Form for Testing Purposes'
            }),
            routerHelper.getNewState('form', {
                formName: 'frmWorkspace',
                title: 'ATA Systems Management'
            }),
            routerHelper.getNewState('form', {
                formName: 'frmEmptyWorkspace',
                title: 'Empty Workspace'
            }),
            routerHelper.getNewState('form', {
                formName: 'frmEmptyWorkspaceVertical',
                title: 'Empty Workspace (Vertical Example)'
            }),
            routerHelper.getNewState('form', {
                formName: 'frmTestingExplorer',
                title: 'Explorer Pattern'
            }),
            routerHelper.getNewState('form', {
                formName: 'frmTestingLookup',
                title: 'Testing Lookup Support Form'
            }),
            routerHelper.getNewState('form', {
                formName: 'frmTestingWizard',
                title: 'Testing Wizard Example'
            }),
            routerHelper.getNewState('form', {
                formName: 'frmTestingSettingPages',
                title: 'Testing SettingPages Example'
            }),
            routerHelper.getNewState('form', {
                formName: 'frmTestingBasicForm',
                title: 'Testing Basic Form Pattern'
            }),
            routerHelper.getNewState('form', {
                formName: 'frmTestingSettingPageForm',
                title: 'Testing Setting Page Form Pattern'
            }),

            routerHelper.getNewState('custom', {
                name: 'ssButton',
                parent: 'root.app.layout',
                url: '/ssButton',
                template: `<div class="container">
                    <div class="row">
                        <div class="col-xs-6 col-md-3">
                            <div ss-button="vm.ssButtonDefaultSettings"></div>
                        </div>
                        <div class="col-xs-6 col-md-3">
                            <div ss-button="vm.ssButtonSoftSettings"></div>
                        </div>
                        <div class="col-xs-6 col-md-3">
                            <div ss-button="vm.ssButtonStrongSettings"></div>
                        </div>
                        <div class="col-xs-6 col-md-3">
                            <div ss-button="vm.ssButtonLinkSettings"></div>
                        </div>
                    </div>
                </div>`,
                controller: ['$timeout', function ($timeout) {
                    let vm = this;

                    vm.ssButtonDefaultSettings = {
                        text: 'default',
                        style: 'default',
                        onInitialized: e => vm.defaultButton = e.component
                    };

                    vm.ssButtonSoftSettings = {
                        text: 'soft',
                        style: 'soft',
                        onInitialized: e => vm.softButton = e.component
                    };

                    vm.ssButtonStrongSettings = {
                        text: 'strong',
                        style: 'strong',
                        onInitialized: e => vm.strongButton = e.component
                    };

                    vm.ssButtonLinkSettings = {
                        text: 'link',
                        style: 'link',
                        onInitialized: e => vm.linkButton = e.component
                    };


                    $timeout(()=>{
                        vm.defaultButton.option({
                            style: 'link',
                            text: 'now i\'m link'
                        });

                        vm.linkButton.option({
                            style: 'default',
                            text: 'now i\'m default'
                        });
                    }, 2000);

                }],
                controllerAs: 'vm'
            }),
            routerHelper.getNewState('custom', {
                name: 'ssParameterService',
                parent: 'root.app.layout',
                url: '/ssParameterService',
                template: `Test System Parameter Service`,
                controller: ['ss-core.ssCoreService', function (ssCoreService) {
                    let vm = this;

                    ssCoreService.parameter.getValue('test').then(data => console.log(data));
                }],
                controllerAs: 'vm'
            }),
            routerHelper.getNewState('custom', {
                name: 'ssDmsAssignments',
                parent: 'root.app.layout',
                url: '/ssDmsAssignments',
                template: `<ss-dms-assignments config-options="vm.configOptions"></ss-dms-assignments>`,
                controller: function () {
                    let vm = this;

                    // vm.configOptions = {};
                    // vm.configOptions.entityName = 'Users';
                    // vm.configOptions.entityId = 57;
                },
                controllerAs: 'vm'
            }),
            routerHelper.getNewState('custom', {
                name: 'ssDmsAssignmentsButton',
                parent: 'root.app.layout',
                url: '/ssDmsAssignmentsButton',
                template: `<ss-dms-assignments-button entity-name="vm.entityName" entity-id="vm.entityId"></ss-dms-assignments-button>`,
                controller: function () {
                    let vm = this;

                    vm.entityName = 'Users';
                    vm.entityId = 57;
                },
                controllerAs: 'vm'
            }),
            routerHelper.getNewState('custom', {
                name: 'ssDropDownButton',
                parent: 'root.app.layout',
                url: '/ssDropDownButton',
                template: `<div ss-drop-down-button="vm.dropDownButtonSettings"></div>`,
                controller: function () {
                    let vm = this;

                    vm.dropDownButtonSettings = {
                        icon: 'save',
                        text: 'Save',
                        onClick: function (e) {
                            DevExpress.ui.notify("The \"" + e.component.option('text') + "\" item was clicked", "success", 1500);
                        },
                        contextMenu: {
                            dataSource: ssDropDownButtonExampleData,
                            onItemClick: function(e){
                                if (!e.itemData.items) {
                                    DevExpress.ui.notify("The \"" + e.itemData.text + "\" item was clicked", "success", 1500);
                                }
                            },
                        }
                    };
                },
                controllerAs: 'vm'
            }),
            routerHelper.getNewState('custom', {
                name: 'ssDataGridImport',
                parent: 'root.app.layout',
                url: '/ssDataGridImport',
                template: `<div class="dx-datagrid" ss-data-grid="vm.dataGridSettings"></div>`,
                controller: function () {
                    let vm = this;

                    vm.dataGridSettings = {
                        ssDataContext: {
                            resourceName: 'businessProcesses',
                            primaryKey: 'businessProcessId',
                            writingMode: 'buffered'
                        },
                        import: {
                            enabled: true,
                            customizeColumns: columns => {                               
                                // Remove validation from "Enabled" field
                                columns
                                    .find(col => col.dataField === 'enabled')
                                    .validationRules = [];
                            }
                        },
                        editing: {
                            allowAdding: true,
                            allowUpdating: true,
                            allowDeleting: true,
                            mode: 'row'
                        },
                        selection: {
                            mode: 'row'
                        },
                        columns: [
                            {
                                dataField: "businessProcessId",
                                visible: false
                            },
                            {
                                dataField: "businessProcessTypeId"
                            },
                            {
                                dataField: "name"
                            },
                            {
                                dataField: "externalProcessId"
                            },
                            {
                                dataField: "businessEntityName"
                            },
                            {
                                dataField: "enabled",
                                validationRules: [{
                                    type: "required",
                                    message: "Enabled is required"
                                }]
                            },
                            {
                                dataField: "businessProcessProviderId"
                            },
                            {
                                dataField: "securityObject"
                            },
                            {
                                dataField: "securityObjectMethod"
                            },
                            {
                                dataField: "businessEntitySchemaValidator"
                            },
                            {
                                dataField: "sys_Entry_Date",
                                visible: false,
                                allowImporting: false
                            },
                            {
                                dataField: "sys_Entry_User",
                                visible: false,
                                allowImporting: false
                            },
                            {
                                dataField: "sys_Edit_Date",
                                visible: false,
                                allowImporting: false
                            },
                            {
                                dataField: "sys_Edit_User",
                                visible: false,
                                allowImporting: false
                            },
                            {
                                dataField: "rownumber",
                                visible: false,
                                allowImporting: false
                            }
                        ]
                    };
                },
                controllerAs: 'vm'
            }),
            routerHelper.getNewState('custom', {
                name: 'ssTreeListImport',
                parent: 'root.app.layout',
                url: '/ssTreeListImport',
                template: `<div class="dx-treelist" ss-tree-list="vm.treeListSettings"></div>`,
                controller: function () {
                    let vm = this;

                    vm.treeListSettings = {
                        ssDataContext: {
                            resourceName: 'QueryDefs',
                            primaryKey: 'id',
                            offset: 1,
                            limit: 20,
                            qp: 'id:queryDefId, name',
                            writingMode: 'buffered'
                        },
                        import: {
                            enabled: true  
                        },
                        editing: {
                            allowAdding: true,
                            allowUpdating: true,
                            allowDeleting: true,
                            mode: 'row'
                        },
                        height: '100%',
                        columns: [
                            {
                                dataField: 'id',
                                visible: false
                            },
                            {
                                dataField: 'name',
                                dataType: 'string',
                                caption: 'Name'
                            }
                        ]
                    };
                },
                controllerAs: 'vm'
            }),
            routerHelper.getNewState('custom', {
                name: 'ssLinksTreeView',
                parent: 'root.app.layout',
                url: '/ssLinksTreeView',
                template: `<div ss-links-tree-view="vm.linksTreeViewSettings1"></div>
                            <br/><hr/><br/>
                            <div ss-links-tree-view="vm.linksTreeViewSettings2"></div>`,
                controller: function () {
                    let vm = this;

                    vm.linksTreeViewSettings1 = {
                        navigationMenuName: 'ssCore',
                        height: 350
                    };

                    vm.linksTreeViewSettings2 = {
                        dataSource: ssLinksTreeViewExampleData,
                        height: 350
                    };
                },
                controllerAs: 'vm'
            }),
            routerHelper.getNewState('custom', {
                name: 'ssDropDownBox',
                parent: 'root.app.layout',
                url: '/ssDropDownBox',
                template: `<div ss-drop-down-box="vm.dropDownBoxSettings"></div>`,
                controller: function () {
                    let vm = this;

                    vm.dropDownBoxSettings = {
                        valueExpr: 'queryId',
                        displayExpr: 'name',
                        ssDataContext: {
                            resourceName: 'Queries',
                            primaryKey: 'queryId',
                            qp: 'queryId:Q.queryId, Q.name, U.userName',
                            qf: 'Q.temporal=false',
                            qa: 'Q:Query, U:User',
                            qe: 'Q.ownerUserID=U.userId',
                            qs: 'Q.name'
                        },
                        onSelectionChanged: function (e) { alert(JSON.stringify(e.selectedItem, null, 4)); },
                        showClearButton: true,
                        dropDownOptions: {
                            width: 700
                        },
                        contentFormName: 'frmQueryLookup',
                        placeholder: "Select a Query...",
                        href: "app#!/ni/navigation/navigationItems/menu/show"
                    };
                },
                controllerAs: 'vm'
            }),
            routerHelper.getNewState('custom', {
                name: 'ssScheduler',
                parent: 'root.app.layout',
                url: '/ssScheduler',
                template: `<div ss-scheduler="vm.schedulerSettings"></div>`,
                controller: function () {
                    let vm = this;

                    vm.schedulerSettings = {
                        views: ['week', 'month'],
                        currentView: 'month',
                        currentDate: new Date(2017, 4, 25),
                        startDayHour: 9,
                        height: 600,
                        ssDataContext: {
                            resourceName: 'Queries',
                            primaryKey: 'queryId',
                            qp: 'startDate:sys_Entry_Date, text:name, *',
                            limit: 100,
                            postProcess: function (data) {
                                angular.forEach(data, function (item) {

                                    let duration = Math.floor(Math.random() * 6) + 1;

                                    item.startDate = new Date(item.startDate);
                                    item.endDate = new Date(item.startDate);;
                                    item.endDate.setHours(item.endDate.getHours() + duration);
                                    item.allDay = Math.random() > 0.8 ? true : false;
                                });
                                return data;
                            }
                        },
                    };
                },
                controllerAs: 'vm'
            }),
            routerHelper.getNewState('custom', {
                name: 'ssEntityComments',
                parent: 'root.app.layout',
                url: '/ssEntityComments',
                template: `<ss-entity-comments style="width:500px;" config-options="vm.configOptions"></ss-entity-comments>`,
                controller: function () {
                    let vm = this;

                    vm.configOptions = {};
                    vm.configOptions.entityName = 'Roles';
                    vm.configOptions.entityId = 7;
                },
                controllerAs: 'vm'
            }),
            routerHelper.getNewState('form', {
                moduleName: 'common',
                objectName: 'owners',
                methodName: 'show',
                formName: 'frmParty',
                title: 'Owners',
                formLocals: {
                    dataContext: {
                        queryName: 'parties'
                    },
                    entityInfo: {
                        entityName: 'Owner'
                    },
                    openingOptions: {
                        RECORD_TITLE: "Owner",
                        ROLE_CODE: "OWNER",
                        ENTITY_NAME: "Owner"
                    }
                }
            }),
            routerHelper.getNewState('form', {
                moduleName: 'common',
                objectName: 'customers',
                methodName: 'show',
                formName: 'frmParty',
                title: 'Customers',
                formLocals: {
                    dataContext: {
                        queryName: 'parties'
                    },
                    entityInfo: {
                        entityName: 'Customer'
                    },
                    openingOptions: {
                        RECORD_TITLE: "Customer",
                        ROLE_CODE: "CUS",
                        ENTITY_NAME: "Customer"
                    }
                }
            }),
            routerHelper.getNewState('form', {         
                formName: 'frmCompany',
                title: 'Companies'
            }),
            routerHelper.getNewState('form', {         
                formName: 'frmBasic',
                title: 'EZE PEOPLE'
            })
        ];

        routerHelper.registerStates(states);
    }
})();
