const inquirer = require('inquirer');
const constants = require('./constants');

async function askDetails() {
    const argv = require('minimist')(process.argv.slice(2));
    const questions = [
        {
            type: 'input',
            name: 'formName',
            message: 'Enter the form name: ',
            default: argv._[2] || 'form-name',
            when: !argv._[2],
            validate: function (value) {
                if (value.length) {
                    return true;
                } else {
                    return 'Please enter a name for the entity.';
                }
            }
        },
        {
            type: 'list',
            name: 'patternName',
            message: 'Select the pattern:',
            when: !argv._[3],
            choices: Object.values(constants.PATTERNS),
            default: constants.PATTERNS.BASIC
        }
    ];
    let responses = await inquirer.prompt(questions);
    if(argv._[2]){
        responses.formName = argv._[2];
    }

    if(argv._[3]){
        responses.patternName = argv._[3];
    }
    responses.moduleName = argv['module-name'];
    responses.entityName = argv['entity-name'];
    responses.toolbar = argv.toolbar;

    //Optional parameters
    responses.navigation = typeof(argv.navigation) !== 'undefined' ? argv.navigation : true;
    responses.details = typeof(argv.details) !== 'undefined' ? argv.details : true;
    responses.footer = typeof(argv.footer) !== 'undefined' ? argv.footer : false;


    console.table(responses);
    return responses;
}

module.exports = {askDetails}