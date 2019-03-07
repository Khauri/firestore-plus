/**
 * Extends the DocumentReference to add functions 
 * like deep population.
 * 
 * *note* this is not ready yet so it is not implemented
 */

function recursivePopHelper(ref, fields, depth){

}

export const documentReference = {
    'firestore.DocumentReference.prototype' : (firestorePlusInstance) => ({
        /**
         * Adds deep population to get function
         * @param {Function} oldGet 
         * @param {{populate:any, depth:Number}} param1 
         */
        async get(oldGet, { populate = false, depth = 1 } = {}){
            let snap = await oldGet.call(this)
            if(populate === true || populate.length){
                // do some population type stuff
            }
            return snap
        }
    })
}