const inquirer = require('inquirer');

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
            choices: ['basic', 'simple list', 'simple list and details', 'settings'],
            default: 'basic'
        }
    ];
    let responses = await inquirer.prompt(questions);
    if(argv._[2]){
        responses.formName = argv._[2];
    }

    if(argv._[3]){
        responses.patternName = argv._[3];
    }

    responses.footer = argv.footer;
    console.log(responses);
    return responses;
}

module.exports = {askDetails}