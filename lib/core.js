import askDetails from './inquirer';
import { createDirectory, writeFile } from './files';
import TemplatesService from './templates/templates-service';
import { red } from 'chalk';
import { PATTERNS } from './common/constants';
import { textSync } from 'figlet';

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
            red(
                textSync('SS.Core', { horizontalLayout: 'full' })
            )
        );
        if (argv._[0] === 'generate' || argv._[0] === 'g') {
            switch (argv._[1]) {
                case 'form':
                    const responses = await askDetails();
                    if (Object.values(PATTERNS).indexOf(responses.patternName) === -1) {
                        console.log(red(`SS.Core error: The pattern "${responses.patternName}" does not exist`));
                        process.exit();
                    }
                    await createFiles(responses);
                    break;
                default:
                    console.log(red(`SS.Core error: invalid generator "${argv._[1]}"`));
                    process.exit();
            }
        } else {
            console.log(red(`SS.Core error: invalid command "${argv._[0]}"`));
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
    await createDirectory(name);
    await createDirectory(name + "/blocks");
    await createDirectory(name + "/assets");
    await createDirectory('../entities');
}

async function createPatternFiles(options) {
    await createDirectory(options.formName + '/blocks/toolbar');
    writeFile(options.formName + '/blocks/toolbar', 'toolbar.form.js', TemplatesService.getToolbar(options));
    writeFile(options.formName + '/assets', options.formName + '.controller.js', TemplatesService.getMainController(options));
    //Cambiar a entity name
    if (options.generateService) writeFile(`../entities/`, `${options.formName}.service.js`, TemplatesService.getDataService(options));
    switch (options.patternName) {
        case PATTERNS.BASIC:
            writeFile(options.formName, options.formName + '.form.js', TemplatesService.basic(options));
            await createDirectory(options.formName + '/blocks/content');
            writeFile(options.formName + '/blocks/content', 'content.form.js', TemplatesService.getBasicContent(options))
            break;
        case PATTERNS.SIMPLE_LIST:
            writeFile(options.formName, options.formName + '.form.js', TemplatesService.simpleList(options));
            await createDirectory(options.formName + '/blocks/list');
            writeFile(options.formName + '/blocks/list', 'list.form.js', TemplatesService.getDetailsSection(options));
            writeFile(options.formName + '/assets', options.formName + '.list-section.controller.js', TemplatesService.getSimpleListListSection(options))
            if (options.footer) {
                await createDirectory(options.formName + '/blocks/footer');
                writeFile(options.formName + '/blocks/footer', 'footer.form.js', TemplatesService.getFooter(options))
            }
            break;
        case PATTERNS.SIMPLE_DETAILS:
            writeFile(options.formName, options.formName + '.form.js', TemplatesService.simpleDetails(options));
            await createDirectory(options.formName + '/blocks/details');
            writeFile(options.formName + '/blocks/details', 'details.form.js', TemplatesService.getDetailsSection(options));
            writeFile(options.formName + '/assets', options.formName + '.details-section.controller.js', TemplatesService.getDetailsSectionControler(options))
            if (options.footer) {
                await createDirectory(options.formName + '/blocks/footer');
                writeFile(options.formName + '/blocks/footer', 'footer.form.js', TemplatesService.getFooter(options))
            }
            break;
        case PATTERNS.SIMPLE_LIST_DETAILS:
            writeFile(options.formName, options.formName + '.form.js', TemplatesService.simpleListAndDetails(options));
            if (options.details) {
                await createDirectory(options.formName + '/blocks/details');
                writeFile(options.formName + '/blocks/details', 'details.form.js', TemplatesService.getDetailsSection(options));
                writeFile(options.formName + '/assets', options.formName + '.details-section.controller.js', TemplatesService.getDetailsSectionControler(options))
            }
            if (options.navigation) {
                await createDirectory(options.formName + '/blocks/navigation');
                writeFile(options.formName + '/blocks/navigation', 'navigation.form.js', TemplatesService.getNavigationSection(options))
            }
            if (options.footer) {
                await createDirectory(options.formName + '/blocks/footer');
                writeFile(options.formName + '/blocks/footer', 'footer.form.js', TemplatesService.getFooter(options))
            }
            break;
        case PATTERNS.SETTINGS:
            writeFile(options.formName, options.formName + '.form.js', TemplatesService.settings(options));
            await createDirectory(options.formName + '/blocks/body');
            writeFile(options.formName + '/blocks/body', 'body.form.js', TemplatesService.getSettingsBodySection(options));
            if (options.footer) {
                await createDirectory(options.formName + '/blocks/footer');
                writeFile(options.formName + '/blocks/footer', 'footer.form.js', TemplatesService.getFooter(options))
            }

            if (options.header) {
                await createDirectory(options.formName + '/blocks/header');
                writeFile(options.formName + '/blocks/header', 'header.form.js', TemplatesService.getHeader(options))
            }
            break;
        case PATTERNS.WORKSPACE:
            writeFile(options.formName, options.formName + '.form.js', TemplatesService.workspace(options));

            await createDirectory(options.formName + '/blocks/charts');
            writeFile(options.formName + '/blocks/charts', 'charts.form.js', TemplatesService.getWorkspaceSection('charts', options));

            await createDirectory(options.formName + '/blocks/filter');
            writeFile(options.formName + '/blocks/filter', 'filter.form.js', TemplatesService.getWorkspaceSection('filter', options));

            await createDirectory(options.formName + '/blocks/links');
            writeFile(options.formName + '/blocks/links', 'links.form.js', TemplatesService.getWorkspaceSection('links', options));

            await createDirectory(options.formName + '/blocks/lists');
            writeFile(options.formName + '/blocks/lists', 'lists.form.js', TemplatesService.getWorkspaceSection('lists', options));

            await createDirectory(options.formName + '/blocks/summary');
            writeFile(options.formName + '/blocks/summary', 'summary.form.js', TemplatesService.getWorkspaceSection('summary', options));
            break;
    }
}


export default init;