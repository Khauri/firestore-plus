/**
 * Extends the document snapshot
 */
export const documentSnapshot = {
    'firestore.DocumentSnapshot.prototype' : (firestorePlusInstance) => ({
        data(oldFn){
            let data = oldFn.call(this)
            const path = this.ref.path 
            const schema = firestorePlusInstance._getSchemaByPath(path)
            if(!schema){
                return data
            }
            return schema.validate(data, { strict : true })
        }
    })
}