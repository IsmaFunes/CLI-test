const { WritableFunction } = require('../common');
const closeToolbar = require('./toolbars/close-toolbar');
const standardEntityToolbar = require('./toolbars/standard-entity-toolbar');
const { basicContent } = require('./basic/basic-content');
const { basicFormDef, basicFormMain } = require('./basic/basic-form');
const { mainController } = require('./main-controller');
const simpleListAndDetailsDetailsSection = require('./simple-list-and-details/simple-list-and-details-details')
const { simpleListAndDetailsDef, simpleListAndDetailsMainSection } = require('./simple-list-and-details/simple-list-and-details-form');
const { settingsFormDef, settingsMainSection } = require('./settings/settings-form');
const settingsBodySection = require('./settings/settings-body');
const simpleListAndDetailsNavigationSection = require('./simple-list-and-details/simple-list-and-details-navigation')
const detailsSectionController = require('./simple-list-and-details/details-section.controller');
const footer = require('./footer');
const header = require('./header');
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
    
    if(options.footer){
        patternDefinition.addSection('footer');
    }

    return getPatternMessage("Simple List and Details")
        + patternDefinition.getWriteableString(options)
        + '\n\n' + mainSection.getWriteableString(options);
}

function settings(options){
    let patternDefinition = new WritableFunction(settingsFormDef)
    let mainSection = new WritableFunction(settingsMainSection);
    
    if(options.footer){
        patternDefinition.addSection('footer');
    }

    if(options.header){
        patternDefinition.addSection('header');
    }

    return getPatternMessage("Settings")
        + patternDefinition.getWriteableString(options)
        + '\n\n' + mainSection.getWriteableString(options);
}

function getSettingsBodySection(options){
    return new WritableFunction(settingsBodySection).getWriteableString(options);
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

//Footer

function getFooter(options){
    return new WritableFunction(footer).getWriteableString(options);
}

//Header
function getHeader(options){
    return new WritableFunction(header).getWriteableString(options)
}

module.exports = { basic, simpleListAndDetails, settings, getToolbar, getBasicContent, getMainController, getDetailsSectionControler, getSLDContent, getSLDNavigation, getSettingsBodySection, getFooter, getHeader }
