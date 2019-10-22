//Forms
function basic(formName) {
    let f1 = function () {
        SsCore.blocksManager
            .block('frmformNameUpperCamelCase', getForm_formNameLowerCamelCase);


        function getForm_formNameLowerCamelCase() {

            let form = {};

            form.formLocals = {
                entityInfo: {
                    entityName: '[EntityName]',
                },
                securityInfo: {
                    moduleName: '[ModuleName]',
                    objectName: '[ObjectName]',
                },
                workflowInfo: {
                },
                dataContext: {
                },
                customData: {
                }
            };

            form.formSource = {
                formNameLowerCamelCase: 'frmformNameUpperCamelCase'
            }

            form.formSource.formSections = {
                main: SsCore.blocksManager.getBlock('frmformNameUpperCamelCase.mainSection'), // MAIN (PRIMARY)
                toolbar: SsCore.blocksManager.getBlock('frmformNameUpperCamelCase.toolbarSection'), // TOOLBAR SECTION (optional)
                content: SsCore.blocksManager.getBlock('frmformNameUpperCamelCase.contentSection'), // CONTENT SECTION (**mandatory**)
            }

            // PATTERN
            return angular.merge(getNewForm_basic(), form);
        };
    }

    let f2 = function () {
        SsCore.blocksManager
            .block('frmformNameUpperCamelCase.mainSection', function () {

                return {
                    // optional settings:
                    // controller: 'formNameUpperCamelCaseController'
                    // The basic pattern does not have any classes. Use this property to set the needed classes (eg. 'portlet light')
                    // options: {
                    //     patternClass= ''
                    // }
                };
            });
    }
    f1 = `(${f1.toString()})();`;
    f2 = `\n\n(${f2.toString()})();`;
    f1 = replaceFormName(f1,formName);
    f2 = replaceFormName(f2,formName);
    return getPatternMessage("Basic") + f1 + f2;

}



//Converters
function replaceFormName(fn, formName){
    return  fn.replace(/formNameLowerCamelCase/g, toLowerCamel(formName)).replace(/formNameUpperCamelCase/g, toUpperCamel(formName));
}

function toLowerCamel(string){
    return string.replace(/(\-[a-z])/g, function ($1) { return $1.toUpperCase().replace('-', ''); });
}

function toUpperCamel(string){
    string = toLowerCamel(string);
    return setCharAt(string, 0, string.charAt(0).toUpperCase());
}

function setCharAt(str,index,chr) {
	if(index > str.length-1) return str;
	return str.substr(0,index) + chr + str.substr(index+1);
}

function getPatternMessage(name){
    return `/* Generated code for the ${name} form pattern */\n\n`;
}

//Toolbars
function basicToolbar(formName){
    let fn = function () {
        SsCore.blocksManager
            .block('frmformNameUpperCamelCase.toolbarSection', function () {
    
                return {
                    controlType: 'fpToolbar',
                    toolbarSettings: SsCore.blocksManager.getBlock('ctrlToolbar.close')
                };
            });
    };
    return `(${replaceFormName(fn.toString(), formName)})();`
}

module.exports = { basic, basicToolbar }

// String.prototype.toUnderscore = function () {
//     return this.replace(/([A-Z])/g, function ($1) { return "_" + $1.toLowerCase(); });
// };

// String.prototype.toDash = function () {
//     return this.replace(/([A-Z])/g, function ($1) { return "-" + $1.toLowerCase(); });
// };

// String.prototype.toCamel = function () {
//     return this
// };