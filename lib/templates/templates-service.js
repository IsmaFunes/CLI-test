import WritableFunction from '../common/writable-function';
import closeToolbar from './toolbars/close-toolbar';
import standardEntityToolbar from './toolbars/standard-entity-toolbar';
import basicContent from './basic/basic-content';
import { basicFormDef, basicFormMain } from './basic/basic-form';
import mainController from './main-controller';
import simpleListAndDetailsDetailsSection from './simple-list-and-details/simple-list-and-details-details';
import { simpleListAndDetailsDef, simpleListAndDetailsMainSection } from './simple-list-and-details/simple-list-and-details-form';
import { settingsFormDef, settingsMainSection } from './settings/settings-form';
import { simpleListDef, simpleListMainSection } from './simple-list/simple-list-form';
import { workspaceDef, workspaceMainSection } from './workspace/workspace-form';
import {simpleDetailsDef, simpleDetailsMainSection} from './simple-details/simple-details-form';
import settingsBodySection from './settings/settings-body';
import simpleListAndDetailsNavigationSection from './simple-list-and-details/simple-list-and-details-navigation';
import detailsSectionController from './simple-list-and-details/details-section.controller';
import footer from './footer';
import header from './header';
import dataService from './data-service';
import simpleListListSection from './simple-list/simple-list-list';
import workspaceChartsSection from './workspace/workspace-charts';
import workspaceFilterSection from './workspace/workspace-filter';
import workspaceLinksSection from './workspace/workspace-links';
import workspaceSummarySection from './workspace/workspace-summary';
import workspaceListsSection from './workspace/workspace-lists';

class TemplatesService {

    //Forms
    basic(options) {
        let patternDefinition = new WritableFunction(basicFormDef);
        let mainSection = new WritableFunction(basicFormMain);
        return this.getPatternMessage("Basic")
            + patternDefinition.getWritableString(options)
            + '\n\n' + mainSection.getWritableString(options);
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

        this.addOrDeleteSections(patternDefinition, options);

        return this.getPatternMessage("Simple List and Details")
            + patternDefinition.getWritableString(options)
            + '\n\n' + mainSection.getWritableString(options);
    }

    simpleDetails(options){
        let patternDefinition = new WritableFunction(simpleDetailsDef)
        let mainSection = new WritableFunction(simpleDetailsMainSection);
        this.addOrDeleteSections(patternDefinition, options);

        return this.getPatternMessage("Simple Details")
            + patternDefinition.getWritableString(options)
            + '\n\n' + mainSection.getWritableString(options);
    }

    simpleList(options){
        let patternDefinition = new WritableFunction(simpleListDef)
        let mainSection = new WritableFunction(simpleListMainSection);
        this.addOrDeleteSections(patternDefinition, options);

        return this.getPatternMessage("Simple List")
            + patternDefinition.getWritableString(options)
            + '\n\n' + mainSection.getWritableString(options);
    }

    settings(options) {
        let patternDefinition = new WritableFunction(settingsFormDef)
        let mainSection = new WritableFunction(settingsMainSection);
        this.addOrDeleteSections(patternDefinition, options);
        return this.getPatternMessage("Settings")
            + patternDefinition.getWritableString(options)
            + '\n\n' + mainSection.getWritableString(options);
    }

    workspace(options){
        let patternDefinition = new WritableFunction(workspaceDef)
        let mainSection = new WritableFunction(workspaceMainSection);
        return this.getPatternMessage("Workspace")
            + patternDefinition.getWritableString(options)
            + '\n\n' + mainSection.getWritableString(options);
    }

    getWorkspaceSection(section, options){
        let workspaceSection;
        switch(section){
            case 'charts':
                workspaceSection = workspaceChartsSection;
            break;
            case 'filter':
                workspaceSection = workspaceFilterSection;
            break;
            case 'links':
                workspaceSection = workspaceLinksSection;
            break;
            case 'lists':
                workspaceSection = workspaceListsSection;
            break;
            case 'summary':
                workspaceSection = workspaceSummarySection;
            break;
        }
        return new WritableFunction(workspaceSection).getWritableString(options);
    }

    getSettingsBodySection(options) {
        return new WritableFunction(settingsBodySection).getWritableString(options);
    }

    getPatternMessage(name) {
        return `/* Generated code for the ${name} form pattern */\n\n`;
    }

    //Toolbars
    getToolbar(options) {
        let toolbarName = options.toolbar || 'close';
        switch (toolbarName) {
            case 'close':
                return new WritableFunction(closeToolbar).getWritableString(options);
            case 'standardEntity':
                return new WritableFunction(standardEntityToolbar).getWritableString(options);
        }
    }


    //List
    getSimpleListListSection(options){
        return new WritableFunction(simpleListListSection).getWritableString(options);
    }

    //Details

    getBasicContent(options) {
        return new WritableFunction(basicContent).getWritableString(options);
    }

    getDetailsSection(options) {
        return new WritableFunction(simpleListAndDetailsDetailsSection).getWritableString(options);
    }

    //Navigation
    getNavigationSection(options) {
        return new WritableFunction(simpleListAndDetailsNavigationSection).getWritableString(options);
    }

    //Controllers & providers
    getMainController(options) {
        return new WritableFunction(mainController).getWritableString(options);
    }

    getDetailsSectionControler(options) {
        return new WritableFunction(detailsSectionController).getWritableString(options);
    }

    getDataService(options) {
        return new WritableFunction(dataService).getWritableString(options);
    }

    //Footer

    getFooter(options) {
        return new WritableFunction(footer).getWritableString(options);
    }

    //Header
    getHeader(options) {
        return new WritableFunction(header).getWritableString(options)
    }

    //Optional sections
    addOrDeleteSections(patternDef, options) {
        if (options.footer) {
            patternDef.addSection('footer');
        } else {
            patternDef.deleteSection('footer');
        }

        if (options.header) {
            patternDef.addSection('header');
        } else {
            patternDef.deleteSection('header');
        }
    }
}


export default new TemplatesService();