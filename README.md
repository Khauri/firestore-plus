# Firestore+

```bash
npm install --save `firebase-plus`
```

Firestore+ is an unofficial extension to firebase that adds features such as schema validation, optional deep population (soon), plugins, and more(?)

Warning: This package is experimental and still in alpha testing. It's only currently tested with `firebase@^5.8.5`

## Installation

```bash
npm install --save 'firebase-plus'
# or 
yarn add 'firebase-plus'
```

If you're using schema validation, you might also want to install yup.
Using a custom validator is a feature coming soon.

## Usage

This package mainly works by wrapping existing firestore components such as DocumentReference.

See the wiki for full(er) documenation.

```js
import firebase from 'firebase/app' // this package also works with firebase-admin
import 'firebase/firestore'

// Import FirestorePlus, the included plugins, and the Schema class
import FirestorePlus, { plugins } from 'firestore-plus'

const fPlus = FirestorePlus(firebase)

// Initialize Schema plugin
const schema = new plugins.Schema(/* options */, { autoValidate : true })

// Add schema plugin to fPlus instance
fPlus.use(schema)
// or
firebase.firestore().plus(schema)

// Do other things with plugins. Ex: Creating a Schema

import * as yup from 'yup' // import yup validator

const userSchemaDefinition = {
    // Basic validation
    fullName : yup.string(),

    // With options
    age : {
        type : yup.number(),
        default : 18,
        required : true
    }
    // Using validator's options if supported (may cause issues)
    picture : yup.string.default('some-default-image.jpg').required(),
}

// Register the schema to a collection
const UserSchema = schema.model('mycollection', userSchemaDefinition)
// or
const UserSchema = firebase.firestore().plus().schema('myCollection', userSchemaDefinition)

```

*A note about the schema plugin*

If `autoValidate` is set to True, the schema will be automatically validated whenever functions that set or retrieve data are called. If the document fails validation, a big obnoxious error will be thrown. 

For example:

```js
firebase.firestore().doc(`path/to/doc/${id}`).get().then( snap => snap.data())
firebase.firestore().doc(`path/to/doc/${id}`).set({ /* some data */})
firebase.firestore().doc(`path/to/doc/${id}`).update({ /* some data */})
```

Validation can also be done manually by calling the schema's validate method directly

```js
try {
    UserSchema.validate({/* some datat */ })
    console.log(":)") // successfully validated
} catch(error){
    console.log(":(") // validation failed
}
```

### TODO Before 1.1.0 release

- Custom Validator