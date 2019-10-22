const inquirer = require('inquirer');

function askDetails() {
    const argv = require('minimist')(process.argv.slice(2));
    const questions = [
        {
            type: 'input',
            name: 'name',
            message: 'Enter the form name: ',
            default: argv._[0] || 'entity-name',
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
            name: 'pattern',
            message: 'Select the pattern:',
            choices: ['basic', 'simple list', 'simple list and details', 'settings'],
            default: 'basic'
        }
    ];
    return inquirer.prompt(questions);
}

module.exports = {askDetails}