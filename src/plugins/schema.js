import { Schema, SchemaBuilder } from '../Schema'
import { FirestorePlusPlugin, PluginTargets } from '../Plugin'

export class SchemaPlugin extends FirestorePlusPlugin {
    constructor(validator){
        super()
        this.schema = {}
    }
    get defaultName(){
        return 'schema'
    }

    get id(){
        return '@firestore-plus/schema'
    }

    get extensions(){
        return {
            [PluginTargets.DocumentSnapshot('data')] : (chain) => {
                const { wrapped, context, current, done } = chain
                const data = current || wrapped.call(context)
                const path = context.ref.path 
                const schema = this.getSchemaByPath(path)
                if(!schema){
                    return done(data)
                }
                done(schema.validate(data, { strict : true }))
            },

            // [PluginTargets.DocumentSnapshot('get')](){
                
            // }
        }
    }

    /**
     * 
     * @param {string} path 
     */
    getSchemaByPath(path){
        let schema = null,
            params = {}
        path = path.split(/\\|\//g).filter(Boolean).slice(0,-1)
        for(let key in this.schema){
            let temp = this.schema[key]
            key = key.split(/\\|\//g).filter(Boolean)
            if(path.length !== key.length){
                continue
            }
            let i = key.length - 1
            while(--i >= 0){
                // check for equivalency and wildcards
                if(key[i] !== path[i] && /^:/.test(key[i]) === false){
                    break
                }
            }
            if(i < 0){
                schema = temp
            }
        }
        return schema
    }

    /**
     * @param {Array<String>|String} arrayOrString 
     * @param {Object} schemaOrObject 
     */
    model(arrayOrString, schemaOrObject){
        if(!schemaOrObject || !arrayOrString){
            throw new TypeError(`path(s) and schema definition required but recieved [${
                Array.from(arguments).map(el=>typeof el).join()
            }]`)
        }
        // first resolve the schema
        if(!Schema.isSchema(schemaOrObject)){
            if(typeof schemaOrObject === 'function'){
                throw new TypeError('schema should inherit from Schema class')
            }
            schemaOrObject = SchemaBuilder(schemaOrObject)
        }
        if(arrayOrString instanceof Array){
            arrayOrString.forEach(string => this.model(string, schemaOrObject))
        }
        if(!(typeof arrayOrString === 'string')){
            throw `Path must string or array of strings`
        }
        this.schema[arrayOrString] = schemaOrObject
        return schemaOrObject
    }
}