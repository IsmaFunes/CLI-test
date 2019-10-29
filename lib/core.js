const inquirer = require('./inquirer');
const files = require('./files');
const template = require('./templates');
const chalk = require('chalk');
const constants = require('./constants');
const figlet = require('figlet');


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
                    await createFiles(responses.patternName, responses.formName);
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

async function createFiles(patternName, formName) {
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
        case constants.PATTERNS.BASIC:
            files.writeFile(formName, formName + '-form.js', template.basic(formName));
            await files.createDirectory(formName + '/blocks/toolbar');
            await files.createDirectory(formName + '/blocks/details');
            files.writeFile(formName + '/blocks/toolbar', 'toolbar.form.js', template.basicToolbar(formName));
            files.writeFile(formName + '/blocks/details', 'details.form.js', template.basicDetails(formName))
            break;
        case constants.PATTERNS.SIMPLE_LIST:
            break;
        case constants.PATTERNS.SIMPLE_LIST_DETAILS:
            break;
        case constants.PATTERNS.SETTINGS:
            break;
    }
}


module.exports = { init }