
const chalk = require('chalk');

class WritableFunction {
    constructor(fn) {
        if (typeof fn !== 'function') {
            console.log(chalk.red('Invalid writeable function: ' + fn));
            process.exit();
        }

        this.definition = fn;
        this.stringDefinition = fn.toString();
    }

    toAutoExecString() {
        this.stringDefinition = `(${this.stringDefinition})();`;
    }

    getWriteableString(formName, entityName, moduleName) {
        // let res = this.definition.toString();
        this.deleteFunctionName();
        if (entityName) this.replaceEntityName(this.stringDefinition, entityName);
        if (moduleName) this.replaceModulName(this.stringDefinition, moduleName);
        this.toAutoExecString();
        this.replaceFormName(formName);
        return this.stringDefinition;
    }

    deleteFunctionName(){
        let from = this.stringDefinition.indexOf('function') + 9;
        let to = this.stringDefinition.indexOf('(');
        let functionName = this.stringDefinition.substring(from, to);
        this.stringDefinition = this.stringDefinition.replace(functionName, '');
    }

    replaceFormName(formName) {
        this.stringDefinition = this.stringDefinition.replace(/formNameLowerCamelCase/g, toLowerCamel(formName)).replace(/formNameUpperCamelCase/g, toUpperCamel(formName));
    }

    replaceEntityName(entityName) {
        this.stringDefinition =  this.stringDefinition.replace(/EntityName/g, entityName);
    }

    replaceModulName(moduleName) {
        this.stringDefinition =  this.stringDefinition.replace(/ModuleName/g, moduleName);
    }

    deleteSection(sectionName) {
        let sct = sectionName.toLowerCase() + 'Section';
        this.stringDefinition =  this.stringDefinition.replace(`${sectionName}: SsCore.blocksManager.getBlock('frmFormNameUpperCamelCase.${sct}'),`, '')
    }
}

function toLowerCamel(string) {
    return string.replace(/(\-[a-z])/g, function ($1) { return $1.toUpperCase().replace('-', ''); });
}

function toUpperCamel(string) {
    string = toLowerCamel(string);
    return setCharAt(string, 0, string.charAt(0).toUpperCase());
}

function setCharAt(str, index, chr) {
    if (index > str.length - 1) return str;
    return str.substr(0, index) + chr + str.substr(index + 1);
}

module.exports = { WritableFunction }