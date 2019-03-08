import { SchemaBuilder, Schema } from './Schema'
import { FirestorePlusPlugin } from './Plugin'

const createPlusObject = (firebase) => {
    const fp = new FirestorePlus(firebase)

    function plus(plugin, options){
        if(arguments.length === 0){
            return fp
        }
        if(FirestorePlusPlugin.isPlugin(plugin)){
            fp.use(plugin, options)
        } else {
            for(let key in obj){
                fp.use(obj[key], key)
            }
        }
        return fp
    }
    plus.instance = fp
    
    return plus
}

/**
 * A function that idempotently attaches the plus interface to firestore
 * @param {*} firebase 
 * @returns {FirestorePlus}
 */
export default function hooker(firebase, forceRecreate){
    if(!firebase || typeof firebase.firestore !== 'function'){
        throw new TypeError('firebase instance with firestore enabled is required')
    }
    const hookTarget = firebase.firestore.Firestore.prototype
    if(!hookTarget['plus'] || forceRecreate === true){
        hookTarget['plus'] = createPlusObject(firebase)
    }
    return hookTarget['plus'].instance
}

class FirestorePlus {
    /**
     * Creates a new instance of FirestorePlus
     * @param {firebase} firebase 
     */
    constructor(firebase){
        this.firebase = firebase
        this.plugins = {}
    }

    use(plugin={}, name = plugin.defaultName, id = plugin.id || name){
        if(!name){
            throw new TypeError('plugin with no default name supplied')
        }
        /** @type {PropertyDescriptor} */
        const descriptor = {
            value : plugin,
            enumerable : false, 
            writable : false,
        }
        if(!this.plugins[plugin.id]){
            if(typeof plugin.__init === 'function'){
                plugin.__init(this)
            }
            Object.defineProperty(this.plugins, id, descriptor)
        }
        if(!this[name]){
            Object.defineProperty(this, name, descriptor)
        }
        return this
    }
}