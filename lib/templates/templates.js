const { WritableFunction } = require('../common');
const closeToolbar = require('./toolbars/close-toolbar');
const standardEntityToolbar = require('./toolbars/standard-entity-toolbar');
const { basicContent } = require('./basic/basic-content');
const { basicFormDef, basicFormMain } = require('./basic/basic-form');
const { mainController } = require('./main-controller');
const simpleListAndDetailsDetailsSection = require('./simple-list-and-details/simple-list-and-details-details')
const { simpleListAndDetailsDef, simpleListAndDetailsMainSection } = require('./simple-list-and-details/simple-list-and-details-form')
const simpleListAndDetailsNavigationSection = require('./simple-list-and-details/simple-list-and-details-navigation')
const detailsSectionController = require('./simple-list-and-details/details-section.controller');

//Forms
function basic(options) {
    return getPatternMessage("Basic")
        + new WritableFunction(basicFormDef).getWriteableString(options)
        + '\n\n' + new WritableFunction(basicFormMain).getWriteableString(options);
}

function simpleListAndDetails(options) {
    let patternDefinition = new WritableFunction(simpleListAndDetailsDef)
    let mainSection = new WritableFunction(simpleListAndDetailsMainSection);
    if(!options.details){
        patternDefinition.deleteSection('details');
    }
    if(!options.navigation){
        patternDefinition.deleteSection('navigation');
    }

    return getPatternMessage("Simple List and Details")
        + patternDefinition.getWriteableString(options)
        + '\n\n' + mainSection.getWriteableString(options);
}

function getPatternMessage(name) {
    return `/* Generated code for the ${name} form pattern */\n\n`;
}

//Toolbars
function getToolbar(options) {
    let toolbarName = options.toolbar || 'close';
    switch (toolbarName) {
        case 'close':
            return new WritableFunction(closeToolbar).getWriteableString(options);
        case 'standardEntity':
            return new WritableFunction(standardEntityToolbar).getWriteableString(options);
    }
}



//Details

function getBasicContent(options) {
    return new WritableFunction(basicContent).getWriteableString(options);
}

function getSLDContent(options) {
    return new WritableFunction(simpleListAndDetailsDetailsSection).getWriteableString(options);
}

//Navigation
function getSLDNavigation(options) {
    return new WritableFunction(simpleListAndDetailsNavigationSection).getWriteableString(options);
}

//Controllers
function getMainController(options) {
    return new WritableFunction(mainController).getWriteableString(options);
}

function getDetailsSectionControler(options){
    return new WritableFunction(detailsSectionController).getWriteableString(options);
}

module.exports = { basic, simpleListAndDetails, getToolbar, getBasicContent, getMainController, getDetailsSectionControler, getSLDContent, getSLDNavigation }
