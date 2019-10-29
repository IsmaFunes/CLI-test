const inquirer = require('./inquirer');
const files = require('./files');
const template = require('./templates');
const chalk = require('chalk');


const PATTERNS = {
    BASIC: 'basic',
    SIMPLE_LIST: 'simple list',
    SIMPLE_LIST_DETAILS: 'simple list and details',
    SETTINGS: 'settings'
}

async function init() {
    try {
        const argv = require('minimist')(process.argv.slice(2));
        if (argv._[0] === 'generate' || argv._[0] === 'g') {
            switch (argv._[1]) {
                case 'form':
                    const responses = await inquirer.askDetails();
                    if (Object.values(PATTERNS).indexOf(responses.patternName) === -1){
                            console.log(chalk.red(`SS.Core error: The pattern "${responses.patternName}" does not exist`));
                            process.exit(); 
                    }
                    await createFiles(responses.patternName, responses.formName);
                    break;
            }
        }
    } catch (e) {
        throw e;
    }
}

async function createFiles(patternName, formName){
    await createDirectoriesAndFiles(formName);
    await createPatternFiles(patternName, formName);
}

async function createDirectoriesAndFiles(name) {
    await files.createDirectory(name);
    await files.createDirectory(name + "/blocks");
    await files.createDirectory(name + "/assets");
}

async function createPatternFiles(patternName, formName) {
    switch (patternName) {
        case PATTERNS.BASIC:
            await files.writeFile(formName, formName + '-form.js', template.basic(formName));
            await files.createDirectory(formName + '/blocks/toolbar');
            await files.createDirectory(formName + '/blocks/details');
            await files.writeFile(formName + '/blocks/toolbar', 'toolbar.form.js', template.basicToolbar(formName));
            await files.writeFile(formName + '/blocks/details', 'details.form.js', template.basicDetails(formName))
            break;
        case PATTERNS.SIMPLE_LIST:
            break;
        case PATTERNS.SIMPLE_LIST_DETAILS:
            break;
        case PATTERNS.SETTINGS:
            break;
    }
}


module.exports = { init, PATTERNS }