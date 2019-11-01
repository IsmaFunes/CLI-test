const inquirer = require('./inquirer');
const files = require('./files');
const template = require('./templates/templates');
const chalk = require('chalk');
const constants = require('./constants');
const figlet = require('figlet');


/* 
Params config:
1: "core"
2: "generate"
3: "form"
4: form-name
5: patternName

Params options:
--module-name
--toolbar
--entityName
*/

async function init() {
    try {
        const argv = require('minimist')(process.argv.slice(2));
        console.log(
            chalk.red(
                figlet.textSync('SS.Core', { horizontalLayout: 'full' })
            )
        );
        if (argv._[0] === 'generate' || argv._[0] === 'g') {
            switch (argv._[1]) {
                case 'form':
                    const responses = await inquirer.askDetails();
                    if (Object.values(constants.PATTERNS).indexOf(responses.patternName) === -1) {
                        console.log(chalk.red(`SS.Core error: The pattern "${responses.patternName}" does not exist`));
                        process.exit();
                    }
                    await createFiles(responses);
                    break;
                default:
                    console.log(chalk.red(`SS.Core error: invalid generator "${argv._[1]}"`));
                    process.exit();
                    break;
            }
        } else {
            console.log(chalk.red(`SS.Core error: invalid command "${argv._[0]}"`));
            process.exit();
        }
    } catch (e) {
        throw e;
    }
}

async function createFiles(options) {
    await createDirectoriesAndFiles(options.formName);
    await createPatternFiles(options);
}

async function createDirectoriesAndFiles(name) {
    await files.createDirectory(name);
    await files.createDirectory(name + "/blocks");
    await files.createDirectory(name + "/assets");
}

async function createPatternFiles(options) {
    await files.createDirectory(options.formName + '/blocks/toolbar');
    files.writeFile(options.formName + '/blocks/toolbar', 'toolbar.form.js', template.getToolbar(options));
    files.writeFile(options.formName + '/assets', options.formName + '.controller.js', template.getMainController(options));

    switch (options.patternName) {
        case constants.PATTERNS.BASIC:
            files.writeFile(options.formName, options.formName + '.form.js', template.basic(options));
            await files.createDirectory(options.formName + '/blocks/content');
            files.writeFile(options.formName + '/blocks/content', 'content.form.js', template.getBasicContent(options))
            break;
        case constants.PATTERNS.SIMPLE_LIST:
            break;
        case constants.PATTERNS.SIMPLE_LIST_DETAILS:
            files.writeFile(options.formName, options.formName + '.form.js', template.simpleListAndDetails(options));
            if(options.details){
                await files.createDirectory(options.formName + '/blocks/details');
                files.writeFile(options.formName + '/blocks/details', 'details.form.js', template.getSLDContent(options))
            }
            if(options.navigation){
                await files.createDirectory(options.formName + '/blocks/navigation');
                files.writeFile(options.formName + '/blocks/navigation', 'navigation.form.js', template.getSLDNavigation(options))
            }
            break;
        case constants.PATTERNS.SETTINGS:
            break;
    }
}


module.exports = { init }