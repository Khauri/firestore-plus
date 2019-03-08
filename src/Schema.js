import { isSchema, object } from 'yup'

function getFirstObject(...args){
    return args.find( el => el !== null && el instanceof Object) || {}
}

/**
 * Extensible Schema class
 */
export class Schema {
    constructor(data){
        
    }

    static isSchema(obj){
        return Boolean(obj) && 
            obj.__firestore_plus_schema__ === true
    }

    static get __is_firestore_plus_schema__(){
        return true
    }

    static get $methods(){
        return this.prototype
    }

    /**
     * Run before validation
     */
    static preValidate(data){}

    static validate(obj={}, options={}){
        obj = getFirstObject(this.preValidate(obj), obj)
        const dataToValidate = {
            ...this.defaultFields,
            ...obj
        }
        const data = object(this.fieldTypes)
            .validateSync(dataToValidate, options)
        return getFirstObject(this.postValidate(data), data)
    }
    /**
     * Run after validation
     * @param {*} data 
     */
    static postValidate(data){}
}
Schema.__firestore_plus_schema__ = true
Schema.fieldTypes = {}
Schema.defaultFields = {}

/**
 * Schema Builder function for object instantiation
 * fields, methods and statics are reserved optional keywords. To use
 * keys of the same name, include them in the fields key.
 */
export function SchemaBuilder({ fields={}, methods={}, statics={}, ...rest } = {}){
    const CustomSchema = class extends Schema { }
    fields = { ...fields, ...rest }
    // Add default field types
    for(let key in fields){
        let fieldType = fields[key]
        if(!fieldType){
            continue
        }
        if(isSchema(fieldType)){
            CustomSchema.fieldTypes[key] = fieldType
            continue 
        }
        if(fieldType.hasOwnProperty('type')){
            CustomSchema.fieldTypes[key] = fieldType.type 
        }
        if(fieldType.hasOwnProperty('default')){
            CustomSchema.defaultFields[key] = fieldType.default 
        }
    }
    for(let key in methods){
        CustomSchema.prototype[key] = methods[key]
    }
    for(let key in statics){
        CustomSchema[key] = statics[key]
    }
    return CustomSchema
}