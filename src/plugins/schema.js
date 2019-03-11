import { Schema, SchemaBuilder } from '../Schema'
import { FirestorePlusPlugin, PluginTargets } from '../Plugin'

/**
 * Converts a path such as path/:to/doc/:id
 * to path-doc
 * @param {string} path
 */
const getCollectionPath = (path) => {
    return path
        // Remove leading and trailing /
        .replace(/^[/\\]|[/\\]$/g,"")
        // Split by slash
        .split(/[\\/]/g)
        // Remove every odd value
        .filter((v,i) => i%2 === 0)
        // Join by '-'
        .join("-")
}

export class SchemaPlugin extends FirestorePlusPlugin {
    constructor({ autoValidate = true } = {}){
        super()
        this.autoValidate = autoValidate
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
            /**
             * Runs validation upon document get
             * Because this resolves the document, this should
             * plugin should be listed last.
             */
            [PluginTargets.DocumentSnapshot('data')] : (chain) => {
                const { wrapped, context, args, next, resolve } = chain
                if(this.autoValidate === false){
                    return next()
                }
                const data = args[0] || wrapped.call(context)
                const path = context.ref.path
                const schema = this.getSchemaByPath(path)
                if(!schema){
                    return resolve(data)
                }
                return resolve(schema.validate(data, { strict : true }))
            },
            // Validates the data before setting
            [PluginTargets.DocumentReference('set', true)] : async (chain) => {
                const { context, args, next } = chain
                if(this.autoValidate === false){
                    return next()
                }
                const path = context.path 
                const schema = this.getSchemaByPath(path)
                if(!schema){
                    return next()
                }
                args[0] = schema.validate(args[0], { strict : true })
                return next(args)
            },
            // Validates the data before updating
            [PluginTargets.DocumentReference('update', true)] : async (chain) => {
                const { context, args, next } = chain
                if(this.autoValidate === false){
                    return next()
                }
                const path = context.path 
                const schema = this.getSchemaByPath(path)
                if(!schema){
                    return next()
                }
                if(typeof args[0] === 'string'){
                    // alternating syntax not currently supported so just continue
                    return next()
                }
                args[0] = schema.validate(args[0], { strict : true })
                return next(args)
            }
        }
    }

    /**
     * Returns the schema given a path
     * @param {string} path 
     * @returns {typeof Schema}
     */
    getSchemaByPath(path){
        let schema = null
        path = getCollectionPath(path)
        for(let key in this.schema){
            if(path === key){
                return this.schema[key]
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
            return arrayOrString.map(string => this.model(string, schemaOrObject))
        }
        if(!(typeof arrayOrString === 'string')){
            throw `Path must string or array of strings`
        }
        this.schema[getCollectionPath(arrayOrString)] = schemaOrObject
        return schemaOrObject
    }
}