const { WritableFunction } = require('../common');
const closeToolbar = require('./toolbars/close-toolbar');
const standardEntityToolbar = require('./toolbars/standard-entity-toolbar');
const { basicContent } = require('./basic/basic-content');
const { basicFormDef, basicFormMain } = require('./basic/basic-form');
const { mainController } = require('./main-controller');
const simpleListAndDetailsDetailsSection = require('./simple-list-and-details/simple-list-and-details-details')
const { simpleListAndDetailsDef, simpleListAndDetailsMainSection } = require('./simple-list-and-details/simple-list-and-details-form')
const simpleListAndDetailsNavigationSection = require('./simple-list-and-details/simple-list-and-details-navigation')

//Forms
function basic(options) {
    return getPatternMessage("Basic")
        + new WritableFunction(basicFormDef).getWriteableString(options.formName, options.entityName)
        + '\n\n' + new WritableFunction(basicFormMain).getWriteableString(options.formName);
}

function simpleListAndDetails(options) {
    return getPatternMessage("Simple List and Details")
        + new WritableFunction(simpleListAndDetailsDef).getWriteableString(options.formName, options.entityName)
        + '\n\n' + new WritableFunction(simpleListAndDetailsMainSection).getWriteableString(options.formName);
}

function getPatternMessage(name) {
    return `/* Generated code for the ${name} form pattern */\n\n`;
}

//Toolbars
function getToolbar(options) {
    let toolbarName = options.toolbar || 'close';
    switch (toolbarName) {
        case 'close':
            return new WritableFunction(closeToolbar).getWriteableString(options.formName);
        case 'standardEntity':
            return new WritableFunction(standardEntityToolbar).getWriteableString(options.formName);
    }
}



//Details

function getBasicContent(options) {
    return new WritableFunction(basicContent).getWriteableString(options.formName);
}

function getSLDContent(options) {
    return new WritableFunction(simpleListAndDetailsDetailsSection).getWriteableString(options.formName);
}

//Navigation
function getSLDNavigation(options) {
    return new WritableFunction(simpleListAndDetailsNavigationSection).getWriteableString(options.formName);
}

//Controllers
function getMainController(options) {
    return new WritableFunction(mainController).getWriteableString(options.formName, options.entityName, options.moduleName);
}

module.exports = { basic, simpleListAndDetails, getToolbar, getBasicContent, getMainController, getSLDContent, getSLDNavigation }
