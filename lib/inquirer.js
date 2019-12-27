import { prompt } from 'inquirer';
import {PATTERNS} from './common/constants';

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
                    return 'Please enter a name for the form.';
                }
            }
        },
        {
            type: 'list',
            name: 'patternName',
            message: 'Select the form pattern:',
            when: !argv._[3],
            choices: Object.values(PATTERNS),
            default: PATTERNS.BASIC,
        },
        

    ];
    let responses = await prompt(questions);
    const moreQuestions = [
        {
            type: 'confirm',
            name: 'generateService',
            message: 'Would you like to create an entity service?',
            when: responses.patternName !== PATTERNS.WORKSPACE,
            default: true
        },
        {
            type: 'input',
            name: 'entityName',
            message: 'Enter the entity name: ',
            when: !argv['entity-name']
        },
        {
            type: 'input',
            name: 'module',
            message: 'Insert the AngularJS module name: ',
            when: !argv['module']
        }]
    let otherResponses = await prompt(moreQuestions);
    responses = {...responses, ...otherResponses};
    if(argv._[2]){
        responses.formName = argv._[2];
    }

    if(argv._[3]){
        responses.patternName = argv._[3];
    }
    console.log(responses)
    responses.module = responses.module || argv['module'];
    responses.entityName = responses.entityName || argv['entity-name'];
    responses.toolbar = argv.toolbar;

    //Optional parameters
    responses.navigation = typeof(argv.navigation) !== 'undefined' ? argv.navigation : true;
    responses.details = typeof(argv.details) !== 'undefined' ? argv.details : true;
    responses.footer = typeof(argv.footer) !== 'undefined' ? argv.footer : false;
    responses.header = typeof(argv.header) !== 'undefined' ? argv.header : false;

    console.table(responses);
    return responses;
}

export default askDetails;