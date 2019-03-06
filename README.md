# firestore-plus

This repository is a proposal (and eventually an implementation) of plugins for cloud firestore that extends its usage with some common or missing functionality.

## Reasoning

Firestore works well as a complete backend solution, but it lacks the user extensibility necessary to make it easy to rapidly implement new features without too much hastle. 

## API

### Initializing Firestore Plus

```js
import * as firebase from 'firebase/app'
import 'firebase/firestore'
import FirestorePlus from 'firestore-plus'

// Initialize the Firebase SDK
firebase.initializeApp({
  // ...
})

// Create a firestore reference
const firestore = firebase.firestore()

// Create a FirestorePlus instance
const firestorePlus = new FirestorePlus(firestore)
```

### Using a plugin

```js
import FirestoreCommentsPlugin from 'firestore-plus-comments'

// Add the plugin
const settings = {
  collection : 'comments'
}
firestorePlus.use(new FirestoreCommentsPlugin(settings))

// Ex: Create a comment and retreive a special comment document reference
const comment = await firestorePlus.comments.create(...data)

// Do something with the comment
comment.delete()
```


### Schema

Firestore is schemaless, but that doesn't mean you can't use a schema.

**Create a Schema**

```js
import { DocumentSchema, FieldTypes } from 'firestore-plus-schema'

class Comment extend DocumentSchema {
  // Set field typees
  static fieldTypes = { 
    
  }
  
  // Set default fields
  static defaultFields = {
  
  }
  
  static collection = "comments" // or using wildcards for subcollections: 'users/:userid/comments
  
  // Add some instance methods
  
  /**
  * Replies to a comment and then returns the comment replied to
  */
  reply(...data){
    // ...
    return new Comment(/* ...data */)
  }
}

```

**Using a schema**

```js
// after performing all the usual initialization stuff
import CommentSchema from '/path/to/schema'

// Attach schema to collection path
firestorePlus.schema('comments', CommentSchema)

// Or to a subcollection path
firestorePlus.schema('users/:uid/comments', CommentSchema)

// Now when you retreive a document reference from this path you will get an instance of Comment
firestorePlus.doc(`comments/${commentId}`) instanceof CommentSchema // true
// Subcollections too
firestorePlus.collection(`users`).doc(uid).collection('comments').doc(commentId) instanceof CommentSchema
```

Documents created from schema will inherit methods and properties of `firebase.firestore.DocumentReference`, but will also add some hooks that are otherwise missing from firestore, such as pre-store, pre-create, pre-set, pre-update, pre-remove, and pre-get. pre-store could be useful for dehydrating a custom class into a simple plain object while pre-get would be useful for rehydrating that plain object into your custom class.

### Creating a plugin

As an example, let's create a simple plugin

```js
import { FirestorePlusPlugin } from 'firestore-plus'

class FirestorePlusLog extends FirestorePlusPlugin {
  /**
  * Called when use is called on this plugin
  * This function should return an object that will
  * be used to extend firestore-plus.
  */
  init(settings){
    return { 
      toggleLogging : () => this.isLogging = !this.isLogging
    }
  }
}

```

## Prior Art

[geofirestore](https://github.com/geofirestore/geofirestore-js) is a module that adds geohashing to firestore. 
