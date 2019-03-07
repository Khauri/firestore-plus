import { isSchema, object } from 'yup'

/**
 * Extensible Schema class
 */
export class Schema {
    constructor(){

    }

    static get __is_firestore_plus_schema__(){
        return true
    }

    static validate(obj={}, options={}){
        return object(this.fieldTypes)
            .validateSync(
                Object.assign(
                    this.defaultFields, 
                    obj
                ),
                options
            )
    }
}
Schema.fieldTypes = {}
Schema.defaultFields = {}

/**
 * Schema Builder function for object instantiation
 * @param {*} fieldTypes 
 * @param {*} methods 
 */
export function SchemaBuilder(fieldTypes={}, methods={}){
    const CustomSchema = class extends Schema {
        
    }
    // Add default field types
    for(let key in fieldTypes){
        let fieldType = fieldTypes[key]
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
    return CustomSchema
}