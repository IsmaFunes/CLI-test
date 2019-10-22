const inquirer = require('./inquirer');
const files = require('./files');
const template = require('./templates');


const PATTERNS = {
    BASIC: 'basic',
    SIMPLE_LIST: 'simple list',
    SIMPLE_LIST_DETAILS: 'simple list and details',
    SETTINGS: 'settings'
  }

async function generatePattern(){
    try {
        const responses = await inquirer.askDetails();
        await createDirectoriesAndFiles(responses.name);
        await createPatternFiles(responses.pattern, responses.name);
    } catch (e) {
        throw e;
    }
}

async function createDirectoriesAndFiles(name){
    await files.createDirectory(name);
    await files.createDirectory(name + "/blocks");
    await files.createDirectory(name + "/assets");
}

async function createPatternFiles(patternName, formName){
    switch(patternName){
        case PATTERNS.BASIC:
            await files.writeFile(formName, formName + '-form.js', template.basic(formName));
            await files.createDirectory(formName + '/blocks/toolbar');
            await files.writeFile(formName + '/blocks/toolbar', 'toolbar.form.js', template.basicToolbar(formName))
            break;
        case PATTERNS.SIMPLE_LIST:
            break;
        case PATTERNS.SIMPLE_LIST_DETAILS:
            break;
        case PATTERNS.SETTINGS:
            break;
    }
}


module.exports = {generatePattern, PATTERNS}