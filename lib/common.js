class WriteableFunction {


    constructor(fn){
        if(typeof fn !== 'function'){
            throw 'Invalid writeable function';
        } 

        this.definition = fn;
    }

    toAutoExecString(fn){
        return `(${fn})();`; 
    }

    getWriteableString(formName, entityName, moduleName){
        let res = this.definition.toString();
        let from = res.indexOf('function') + 9;
        let to = res.indexOf('(');
        let functionName = res.substring(from, to);
        res = res.replace(functionName, '');
        if(entityName) res = this.replaceEntityName(res, entityName);
        if(moduleName) res = this.replaceModulName(res, moduleName);
        return this.replaceFormName(this.toAutoExecString(res), formName);
    }

    replaceFormName(fn, formName){
        return  fn.replace(/formNameLowerCamelCase/g, toLowerCamel(formName)).replace(/formNameUpperCamelCase/g, toUpperCamel(formName));
    }

    replaceEntityName(fn, entityName){
        return fn.replace(/EntityName/g, entityName);
    }

    replaceModulName(fn, moduleName){
        return fn.replace(/ModuleName/g, moduleName);
    }
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

module.exports = {WriteableFunction}