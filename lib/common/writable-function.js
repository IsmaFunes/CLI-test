import { toLowerCamel, toUpperCamel } from './functions';

const chalk = require('chalk');

export default class WritableFunction {
    constructor(fn) {
        if (typeof fn !== 'function') {
            console.log(chalk.red('Invalid writable function: ' + fn));
            process.exit();
        }

        this.definition = fn;
        this.stringDefinition = fn.toString();
    }

    toAutoExecString() {
        this.stringDefinition = `(${this.stringDefinition})();`;
    }

    getWritableString(options) {
        this.deleteFunctionName();
        if (options.entityName) this.replaceEntityName(options.entityName);
        if (options.module) this.replaceModule(options.module);
        this.toAutoExecString();
        this.replaceFormName(options.formName);
        return this.stringDefinition;
    }

    deleteFunctionName() {
        let from = this.stringDefinition.indexOf('function') + 9;
        let to = this.stringDefinition.indexOf('(');
        let functionName = this.stringDefinition.substring(from, to);
        this.stringDefinition = this.stringDefinition.replace(functionName, '');
    }

    replaceFormName(formName) {
        this.stringDefinition = this.stringDefinition.replace(/formNameLowerCamelCase/g, toLowerCamel(formName)).replace(/formNameUpperCamelCase/g, toUpperCamel(formName));
    }

    replaceEntityName(entityName) {
        this.stringDefinition = this.stringDefinition.replace(/EntityName/g, entityName);
    }

    replaceDataServiceName(dataServiceName){
        this.stringDefinition = this.stringDefinition.replace(/dataServiceName/g, dataServiceName);
    }

    replaceModule(moduleName) {
        this.stringDefinition = this.stringDefinition.replace(/AngularModuleName/g, moduleName);
    }

    deleteSection(sectionName) {
        const sct = sectionName.toLowerCase() + 'Section';
        this.stringDefinition = this.stringDefinition.replace(`${sectionName}: SsCore.blocksManager.getBlock('frmformNameUpperCamelCase.${sct}'),`, '')
    }

    addSection(sectionName) {
        const sct = `${sectionName}: SsCore.blocksManager.getBlock('frmformNameUpperCamelCase.${sectionName}Section'),`;
        const formSectionIndex = this.stringDefinition.indexOf('form.formSource.formSections');
        const objIndex = this.stringDefinition.indexOf('{', formSectionIndex) + 1;
        this.stringDefinition = [this.stringDefinition.slice(0, objIndex), '\n\t\t\t' + sct, this.stringDefinition.slice(objIndex)].join('');
    }

    reset() {
        this.stringDefinition = this.definition.toString();
    }
}

