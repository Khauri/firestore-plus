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

See the wiki for full(er) documenation

### TODO Before 1.0.0 release

- Custom Validator

- Add plugin interface. The interface should have a way of specifying what native firebase objects to extend.

- Create better way to wrap and extend firestore components. Perhaps by adding a function that wraps a component and adds a chain of functions. Here's an idea:

```js
const key = '__firestore_plus__'
const wrap = (target, prop, cb) => {
    let fn = target[prop]
    if(!fn[key]){
        const original = fn
        const queue = []
        fn = function(){
            const valToReturn = null
            queue.forEach(fn => {
                fn.apply(this, arguments)
            })
        }
        fn['queue'] = queue
        fn[key] = true
    }
    fn.queue.push(cb)
}
```

- Add `plus` function to firebase.firestore instance that returns firestore+ instance if called with empty parameter and extends firestore if called with a plugin

```js
import FirestorePlus from 'firestore-plus'

// Initialize
const instance = FirestorePlus(firebase)

// get instance of firestore plus
const instance = firebase.firestore().plus()

// add a plugin
firebase.firestore().plus(plugin)

// Add an alias for thee plugn
firebase.firestore().plus(plugin, 'myPlugin')

// retrieve a plugin
firebase.firestore().plus().myPlugin

// Add multiple named plugins at once
// This pattern should be useful for 
firebase.firestore().plus({plugin1, plugin2, plugin3})

```

- Extrapolate schema into a plugin library

```js
import { plugins } from 'firestore-plus'
// 
firebase.firestore().plus(plugins.schema)
```