import { overwrite } from './util'

const createPluginTarget = (val) => {
    function target(async, path){ 
        if(typeof async === 'string'){
            path = async
            async = false
        }
        return `${val}${path?`.${path}`:''}${async?'#async':''}`
    }
    target.toString = function(){ 
    	return val
    }
    return target
}

export const PluginTargets = {
    DocumentSnapshot : createPluginTarget('firebase.firestore.DocumentSnapshot.prototype'),
    DocumentReference : createPluginTarget('firebasee.firestore.DocumentReference.prototype'),
    CollectionReference : createPluginTarget('firebase.firestore.CollectionReference.prototype'),
    QueryDocumentSnapshot : createPluginTarget('firebase.firestore.QueryDocumentSnapshot.prototype'),
    QuerySnapshot : createPluginTarget('firebase.firestore.QuerySnapshot.prototype')
}

export class FirestorePlusPlugin {
    static isPlugin(plugin){
        return plugin && 
            plugin.__firestore_plus_plugin__ === true
    }

    get defaultName(){
        return null
    }

    get id(){
        return null
    }

    get __firestore_plus_plugin__ (){
        return true
    }

    get extensions(){
        return { }
    }

    // Attach all appropriate methods of this instance
    __init(fp){
        this.fp = fp
        this.firebase = fp.firebase
        this.preInit()
        for(let key in this.extensions){
            let isAsync = false
            if(/#async$/.test(key)){
                isAsync = true 
                key = key.replace(/#async$/, "")
            }
            if(!/^firebase/.test(key)){
                continue
            }
            if(/prototype$/.test(key)){
                throw "Overwriting entire prototype is not supported"
            }
            overwrite(fp, this.firebase, key.split('.').slice(1), this.extensions[key], isAsync)
        }
        this.init()
    }
    
    preInit(){
        // Called before initializing. Useful for adding dependencies
        // this.fplus is available here
    }

    init(){

    }
}
FirestorePlusPlugin.__firestore_plus_plugin__ = true