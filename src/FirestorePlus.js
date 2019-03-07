import { SchemaBuilder } from './Schema'
import * as extensions from './extend'

export default class FirestorePlus {
    /**
     * 
     * @param {firebase} firebase 
     */
    constructor(firebase){
        if(!firebase || typeof firebase.firestore !== 'function'){
            throw new TypeError('firebase instance with firestore enabled is required')
        }
        this.firebase = firebase
        this.firestore = firebase.firestore()
        this._schema = {}
        this._init()
    }

    static isSchema(obj){
        return obj !== null 
            && typeof obj !== 'undefined' 
            && obj.__is_firestore_plus_schema__ === true
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
        if(!FirestorePlus.isSchema(schemaOrObject)){
            if(typeof schemaOrObject === 'function'){
                throw new TypeError('schema should inherit from Schema class')
            }
            schemaOrObject = SchemaBuilder(schemaOrObject)
        }
        if(arrayOrString instanceof Array){
            // pointless recursion?
            arrayOrString.forEach(string => this.model(string, schemaOrObject))
        }
        if(!(typeof arrayOrString === 'string')){
            throw `Path must string or array of strings`
        }
        this._schema[arrayOrString] = schemaOrObject
        return schemaOrObject
    }

    /**
     * 
     * @param {string} path 
     */
    getSchemaByPath(path){
        let schema = null,
            params = {}
        path = path.split(/\\|\//g).filter(Boolean).slice(0,-1)
        for(let key in this._schema){
            let temp = this._schema[key]
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
     * Adds all necessary functions and methods to the passed in
     * instance of firebase. Honestly, don't try to read this b/c 
     * it's a mess.
     */
    _init(){
        for(let key in extensions){
            let targets = extensions[key]
            for(let path in targets){
                let target = path.split('.').reduce( (curr, part) => {
                    return curr && curr[part]
                }, this.firebase)
                if(!target){
                    continue
                }
                let exts = targets[path](this)
                for(let prop in exts){
                    let oldVal = target[prop],
                        newVal = exts[prop]
                    if(typeof oldVal === 'function' && typeof newVal === 'function'){
                        // Get 
                        if(oldVal.__is_firestore_plus_stubbed === true){
                            oldVal = oldVal.__firestore_plus_stubbed_function
                        }
                        // Try to keep the value of `this` bound
                        function stub (...args){ return newVal.call(this, oldVal, ...args) }
                        stub.__is_firestore_plus_stubbed = true
                        stub.__firestore_plus_stubbed_function = oldVal
                        target[prop] = stub
                    }else {
                        target[prop] = newVal
                    }
                }
            }
        }
    }
}