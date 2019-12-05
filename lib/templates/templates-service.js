import WritableFunction from '../common/writable-function';
import closeToolbar from './toolbars/close-toolbar';
import standardEntityToolbar from './toolbars/standard-entity-toolbar';
import { basicContent } from './basic/basic-content';
import { basicFormDef, basicFormMain } from './basic/basic-form';
import { mainController } from './main-controller';
import simpleListAndDetailsDetailsSection from './simple-list-and-details/simple-list-and-details-details';
import { simpleListAndDetailsDef, simpleListAndDetailsMainSection } from './simple-list-and-details/simple-list-and-details-form';
import { settingsFormDef, settingsMainSection } from './settings/settings-form';
import settingsBodySection from './settings/settings-body';
import simpleListAndDetailsNavigationSection from './simple-list-and-details/simple-list-and-details-navigation';
import detailsSectionController from './simple-list-and-details/details-section.controller';
import footer from './footer';
import header from './header';
import dataService from './data-service';

class TemplatesService {

    //Forms
    basic(options) {
        return this.getPatternMessage("Basic")
            + new WritableFunction(basicFormDef).getWriteableString(options)
            + '\n\n' + new WritableFunction(basicFormMain).getWriteableString(options);
    }

    simpleListAndDetails(options) {
        let patternDefinition = new WritableFunction(simpleListAndDetailsDef)
        let mainSection = new WritableFunction(simpleListAndDetailsMainSection);
        if (!options.details) {
            patternDefinition.deleteSection('details');
        }
        if (!options.navigation) {
            patternDefinition.deleteSection('navigation');
        }

        if (options.footer) {
            patternDefinition.addSection('footer');
        }

        return this.getPatternMessage("Simple List and Details")
            + patternDefinition.getWriteableString(options)
            + '\n\n' + mainSection.getWriteableString(options);
    }

    settings(options) {
        let patternDefinition = new WritableFunction(settingsFormDef)
        let mainSection = new WritableFunction(settingsMainSection);

        if (options.footer) {
            patternDefinition.addSection('footer');
        }

        if (options.header) {
            patternDefinition.addSection('header');
        }

        return this.getPatternMessage("Settings")
            + patternDefinition.getWriteableString(options)
            + '\n\n' + mainSection.getWriteableString(options);
    }

    getSettingsBodySection(options) {
        return new WritableFunction(settingsBodySection).getWriteableString(options);
    }

    getPatternMessage(name) {
        return `/* Generated code for the ${name} form pattern */\n\n`;
    }

    //Toolbars
    getToolbar(options) {
        let toolbarName = options.toolbar || 'close';
        switch (toolbarName) {
            case 'close':
                return new WritableFunction(closeToolbar).getWriteableString(options);
            case 'standardEntity':
                return new WritableFunction(standardEntityToolbar).getWriteableString(options);
        }
    }



    //Details

    getBasicContent(options) {
        return new WritableFunction(basicContent).getWriteableString(options);
    }

    getSLDContent(options) {
        return new WritableFunction(simpleListAndDetailsDetailsSection).getWriteableString(options);
    }

    //Navigation
    getSLDNavigation(options) {
        return new WritableFunction(simpleListAndDetailsNavigationSection).getWriteableString(options);
    }

    //Controllers & providers
    getMainController(options) {
        return new WritableFunction(mainController).getWriteableString(options);
    }

    getDetailsSectionControler(options) {
        return new WritableFunction(detailsSectionController).getWriteableString(options);
    }

    getDataService(options) {
        return new WritableFunction(dataService).getWriteableString(options);
    }

    //Footer

    getFooter(options) {
        return new WritableFunction(footer).getWriteableString(options);
    }

    //Header
    getHeader(options) {
        return new WritableFunction(header).getWriteableString(options)
    }
}


export default new TemplatesService();