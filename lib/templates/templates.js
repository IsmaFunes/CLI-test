const {WriteableFunction} = require('../common');
const {basicToolbar} = require('./basic/basic-toolbar');
const {basicDetails} = require('./basic/basic-details');
const {basicForm1, basicForm2} = require('./basic/basic-form');

//Forms
function basic(formName) {
    return getPatternMessage("Basic") 
    + new WriteableFunction(basicForm1).getWriteableString(formName) 
    +'\n\n'+ new WriteableFunction(basicForm2).getWriteableString(formName);

}





function getPatternMessage(name){
    return `/* Generated code for the ${name} form pattern */\n\n`;
}

//Toolbars
function getBasicToolbar(formName){
    return new WriteableFunction(basicToolbar).getWriteableString(formName);
}

//Details

function getBasicDetails(formName){
   return new WriteableFunction(basicDetails).getWriteableString(formName);
}

module.exports = { basic, getBasicToolbar, getBasicDetails }

// String.prototype.toUnderscore = function () {
//     return this.replace(/([A-Z])/g, function ($1) { return "_" + $1.toLowerCase(); });
// };

// String.prototype.toDash = function () {
//     return this.replace(/([A-Z])/g, function ($1) { return "-" + $1.toLowerCase(); });
// };

// String.prototype.toCamel = function () {
//     return this
// };