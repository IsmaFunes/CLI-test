import { toLowerCamel, toUpperCamel } from './functions';

const chalk = require('chalk');

export default class WritableFunction {
    /**
     * @description This class receives a function and allows to replace placeholders and convert the function into text in order to write it into a file.
     * @param {function} fn - The function to be converted into a string.
     */
    constructor(fn) {
        if (typeof fn !== 'function') {
            console.log(chalk.red('Invalid writable function: ' + fn));
            process.exit();
        }

        this.definition = fn;
        this.stringDefinition = fn.toString();
    }

    /**
     * Converts the function string to an IIFE.
     */
    toAutoExecString() {
        this.stringDefinition = `(${this.stringDefinition})();`;
    }

    /**
     * 
     * @param {FormOptions} options - The options entered on the cmd prompt. 
     * @returns The function definition in string, ready to write in a .js file.
     */
    getWritableString(options) {
        this.deleteFunctionName();
        if (options.entityName) this.replaceEntityName(options.entityName);
        if (options.module) this.replaceModule(options.module);
        this.toAutoExecString();
        this.replaceFormName(options.formName);
        return this.stringDefinition;
    }

    /**
     * @description Deletes the function name from the string definition of the writable function. 
     * Given that all the form pattern template definitions are named functions, it is neccesary to delete the function name in order to make it anonymous, since that is the convention of the SS.Core applications.
     */
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

    replaceDataServiceName(dataServiceName) {
        this.stringDefinition = this.stringDefinition.replace(/dataServiceName/g, dataServiceName);
    }

    replaceModule(moduleName) {
        this.stringDefinition = this.stringDefinition.replace(/AngularModuleName/g, moduleName);
    }

    /**
     * @description Deletes a specific section of a form pattern definition (by name)
     * @param {string} sectionName 
     */
    deleteSection(sectionName) {
        const sct = sectionName.toLowerCase() + 'Section';
        this.stringDefinition = this.stringDefinition.replace(`${sectionName}: SsCore.blocksManager.getBlock('frmformNameUpperCamelCase.${sct}'),`, '')
    }
    /**
    * @description Adds a specific section of a form pattern definition (by name)
    * @param {string} sectionName 
    */
    addSection(sectionName) {
        const sct = `${sectionName}: SsCore.blocksManager.getBlock('frmformNameUpperCamelCase.${sectionName}Section'),`;
        const formSectionIndex = this.stringDefinition.indexOf('form.formSource.formSections');
        const objIndex = this.stringDefinition.indexOf('{', formSectionIndex) + 1;
        this.stringDefinition = [this.stringDefinition.slice(0, objIndex), '\n\t\t\t' + sct, this.stringDefinition.slice(objIndex)].join('');
    }

    /**
     * @description Resets the function string to default, reverting all changes.
     */
    reset() {
        this.stringDefinition = this.definition.toString();
    }
}

