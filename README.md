#SS Core CLI
#### Usage

```bash
core generate form (form name) (pattern name)
```


|  option | description  | accepted values  | default value  |
| ------------ | ------------ | ------------ | ------------ |
|  form name |  The name of the form to create, it should be separated by dashes (e.g. my-form-name) | |  |
|  pattern name |  The name of the form to create, it should be separated by dashes (e.g. my-form-name) | basic simple-list-and-details, simple-list |  |
|  module |  The AngularJS module name in which controllers are going to be inserted |   |  AngularModuleName | 
|  entity-name | The name of the entity that the form handles  |   |  EntityName |
| content  | Specifies if a content section should be created  |   | true  |
| details  | Specifies if a details section should be created  |   | true  |
|  navigation  | Specifies if a navigation section should be created  |   | true  |
| toolbar  | Specifies the toolbar of the form  | close, standardEntity  | close  |
|  footer | Specifies if a footer section should be created (only applicable to patterns that accept it)  |   | false  |
|  header | Specifies if a header section should be created (only applicable to patterns that accept it)  |   | false  |




