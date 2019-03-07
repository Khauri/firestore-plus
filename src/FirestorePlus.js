import { SchemaBuilder } from './Schema'
import * as extensions from './extend'

export default class FirestorePlus {
    /**
     * 
     * @param {firebase} firebase 
     */
    constructor(firebase){
        this.firebase = firebase
        this.firestore = firebase.firestore()
        this._schema = {}
        // 
        this._init()
    }

    /**
     * @param {Array<String>|String} arrayOrString 
     * @param {Object} schemaOrObject 
     */
    model(arrayOrString, schemaOrObject){
        // first resolve the schema
        if(!(schemaOrObject && schemaOrObject.__is_firestore_plus_schema__ === true)){
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
    }
    /**
     * 
     * @param {string} path 
     */
    _getSchemaByPath(path){
        let schema = null,
            params = {}
        path = path.split(/\\|\//g).filter(Boolean).slice(0,-1)
        for(let key in this._schema){
            let temp = this._schema[key]
            key = key.split(/\\|\//g).filter(Boolean)
            if(path.length !== key.length){
                continue
            }
            // console.log(path, key)
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
    
    // _onForwardProperty(prop, type){
    //     // console.log(`[${type}] ${prop}`)
    // }

    _init(){
        const oldSnapFn = this.firebase.firestore.DocumentSnapshot.prototype.data
        const that = this
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
                    console.log(oldVal)
                    if(typeof oldVal === 'function' && typeof newVal === 'function'){
                        // Try to keep the value of `this` bound
                        target[prop] = function(...args){ return newVal.call(this, oldVal, ...args) }
                    }else {
                        target[prop] = newVal
                    }
                }
            }
        }
        // // TODO: Automatically extend all the required functions/methods
        // this.firebase.firestore.DocumentSnapshot.prototype.data = function(){
        //     let data = oldSnapFn.call(this)
        //     const path = this.ref.path 
        //     const schema = that._getSchemaByPath(path)
        //     if(!schema){
        //         return data
        //     }
        //     return schema.validate(data, {strict : true})
        // }
    }
}