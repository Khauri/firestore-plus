import firebase from 'firebase'

import FirestorePlus, { Schema, FieldTypes } from './src'

import { firebaseConfig } from './config'

console.log(firebaseConfig)

firebase.initializeApp(firebaseConfig)

// Initialize firestorePlus
const firestoreP = new FirestorePlus(firebase)

// Class method of creating schema
class Posts extends Schema {
}
Posts.fieldTypes = {
    text : FieldTypes.string()
}
Posts.defaultFields = {
    picture : "Hello World"
}

firestoreP.model('posts', Posts)

// Object meethod of creating schema
const fields = {
    text : {
        type : FieldTypes.string(),
        default : "Hello World"
    },
    title : FieldTypes.string()
}
firestoreP.model('posts/:postid/comments', fields)

async function test(){
    let post = firebase.firestore().doc('posts/4o6VxumWTciSYVUdqSu7')
    const snap = await post.get()
    const data = snap.data()
    console.log(data)
    return true
}

test()