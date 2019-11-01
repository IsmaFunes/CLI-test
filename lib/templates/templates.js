const {WriteableFunction} = require('../common');
const {basicToolbar} = require('./basic/basic-toolbar');
const {basicContent} = require('./basic/basic-content');
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

function getBasicContent(options){
   return new WriteableFunction(basicContent).getWriteableString(options.formName);
}

function getMainController(options){
    return new WriteableFunction(mainController).getWriteableString(options.formName, options.entityName, options.moduleName);
}

module.exports = { basic, getBasicToolbar, getBasicContent, getMainController }
