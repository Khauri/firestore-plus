import firebase from 'firebase'

import FirestorePlus, { Schema, FieldTypes, plugins } from './src'

import { firebaseConfig } from './config'

firebase.initializeApp(firebaseConfig)

// Initialize firestorePlus
FirestorePlus(firebase)

const schemaPlugin = new plugins.SchemaPlugin()
firebase.firestore().plus(schemaPlugin)

// Class method of creating schema
class Posts extends Schema {}

Posts.fieldTypes = {
    title : FieldTypes.number()
}
Posts.defaultFields = {
    picture : "Hello World"
}

schemaPlugin.model('posts', Posts)


// Object method of creating schema
const fields = {
    text : {
        type : FieldTypes.string().email(),
        default : "Hello World"
    },
    title : FieldTypes.number()
}
schemaPlugin.model('posts/:postid/comments', fields)

async function test(){
    let post = firebase.firestore().doc('posts/4o6VxumWTciSYVUdqSu7')
    const snap = await post.get()
    return snap.data()
}

test()
    .then(val => console.log(val))
    .catch( e => console.log(e.message))