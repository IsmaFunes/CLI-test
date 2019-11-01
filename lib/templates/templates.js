const {WriteableFunction} = require('../common');
const {basicToolbar} = require('./basic/basic-toolbar');
const {basicDetails} = require('./basic/basic-details');
const {basicFormDef, basicFormMain} = require('./basic/basic-form');
const {mainController} = require('./main-controller');
//Forms
function basic(options) {
    return getPatternMessage("Basic") 
    + new WriteableFunction(basicFormDef).getWriteableString(options.formName, options.entityName) 
    +'\n\n'+ new WriteableFunction(basicFormMain).getWriteableString(options.formName);
}

function getPatternMessage(name){
    return `/* Generated code for the ${name} form pattern */\n\n`;
}

//Toolbars
function getBasicToolbar(options){
    return new WriteableFunction(basicToolbar).getWriteableString(options.formName);
}

//Details

function getBasicDetails(options){
   return new WriteableFunction(basicDetails).getWriteableString(options.formName);
}

function getMainController(options){
    return new WriteableFunction(mainController).getWriteableString(options.formName, options.entityName, options.moduleName);
}

module.exports = { basic, getBasicToolbar, getBasicDetails, getMainController }
