import { assert, expect, use } from 'chai'
import sinonChai from 'sinon-chai'
import { stub, spy, createSandbox, SinonSandbox, SinonStub, SinonSpy, SinonMock } from 'sinon'
import { client as firebase, admin } from './firebase'

use(sinonChai)

// Stub DocumentSnapshot so that it returns the first argument passed to it
// This needs to be done before FireStorePlus is initialized
const documentSnapshotDataStub = stub(firebase.firestore.DocumentSnapshot.prototype, 'data')
    

import FirestorePlus, { Schema, plugins } from '../src'


/**
 * Create a fake DocumentReference object that's similar
 * to a real one, but with only fields we're concerned about
 * @returns {firebase.firestore.DocumentReference}
 */
const createDocumentReference = (path, data) => {
    return {
        id : path.split(/\\|\//g).filter(Boolean).slice(-1),
        path : path,
        firestore : null,
        get : async function(){
            return 
        },
        isEqual : function(ref){
            return ref.id === this.id
        },
    }
}

/**
 * Create a fake DocumentSnapshot similar to real ones
 * @returns {firebase.firestore.DocumentSnapshot}
 */
const createDocumentSnapshot = (path, data) => {
    return {
        ref : createDocumentReference(path, data),
        data : function(options){
            return data
        }
    }
}

/**
 * Calls the DocumentSnapshat.data function 
 * and returns the array [result, data]
 * @param {*} path 
 * @param {*} data 
 * @returns {[any, any]} 
 */
function callData(path='test/path', data = { number : 0, string : 'hello', array : [] }){
    // Trigger DataStub to return passed in data
    documentSnapshotDataStub.returns(data)
    const result = firebase
        .firestore
        .DocumentSnapshot
        .prototype
        .data
        .call(createDocumentSnapshot(path, data))
    // Make function call
    return [ result, data ]
}

describe('Schema Tests', function(){
    /**
     * Expects firestorePlus and schema
     */
    beforeEach(function(){
        this.fp = FirestorePlus(firebase, true)
        this.fp.use(new plugins.SchemaPlugin())
    })

    describe("#isSchema", function(){
        describe("with Schema", function(){
            it("should return true", function(){
                class MySchema extends Schema {}
                assert.isTrue(Schema.isSchema(MySchema))
            })
        })
        describe("with other values", function(){
            it("should return false", function(){
                assert.isFalse(Schema.isSchema(0), 'Falsy Number')
                assert.isFalse(Schema.isSchema(null), 'Null')
                assert.isFalse(Schema.isSchema(false), 'Falsy Boolean')
                assert.isFalse(Schema.isSchema(true), 'Truthy Boolean')
                assert.isFalse(Schema.isSchema(Date), 'Object')
                assert.isFalse(Schema.isSchema({}), 'Plain Object')
            })
        })
    })

    describe(".validate", function(){
        beforeEach(function(){
            this.sandbox = createSandbox()
            this.schemas = {
                collection : this.fp.schema.model('test', {}),
                subcollection : this.fp.schema.model('test/:subcollection/test', {})
            }
        })
        
        afterEach(function(){
            /** @type {SinonSandbox} */
            const sandbox = this.sandbox
            sandbox.restore()
        })

        it("should be called when DocumentSnapshot#data called", async function(){
            /** @type {SinonSandbox} */
            const sandbox = this.sandbox
            // Spy on the validate function
            const spy = sandbox.spy(Schema, 'validate')
            
            // Trigger DocumentSnapshot data call
            const [result, data] = callData()

            assert.deepEqual(result, data)

            expect(spy).to.have.been.calledOnce
        })

        it("should call pre and post validate hooks", function(){
            /** @type {SinonSandbox} */
            const sandbox = this.sandbox
            // Spy on the validate function
            const preSpy = sandbox.spy(Schema, 'preValidate')
            const postSpy = sandbox.spy(Schema, 'postValidate')

            callData()

            expect(preSpy).to.have.been.calledOnce
            expect(postSpy).to.have.been.calledOnce
        })
    })
})

describe("Schema Plugin Tests", function(){
//     describe("#model", function(){
//         beforeEach(function(){
//             this.fp = FirestorePlus(client)
//         })

//         describe("with missing schema", function(){
//             it("should throw TypeError", function(){
//                 expect(()=>this.fp.model('test', null)).to.throw(TypeError)
//             })
//         })

//         describe("with missing path", function(){
//             it("should throw TypeError", function(){
//                 expect(()=>this.fp.model(null, {})).to.throw(TypeError)
//             })
//         })

//         describe("using class", function(){
//             it("should throw TypeError if class is not schema", function(){
//                 class MySchema {}
//                 expect(()=>this.fp.model('test', MySchema)).to.throw(TypeError)
//             })
//             it("should return passed in schema", function(){
//                 class MySchema extends Schema {}
//                 const schema = this.fp.model('test', MySchema)
//                 assert.strictEqual(MySchema, schema)
//             })
//         })
//         describe("using object", function(){
//             it("should return Schema object", function(){
//                 const schema = this.fp.model('test', {})
//                 assert.isTrue(Schema.isPrototypeOf(schema))
//             })
//         })
//     })

    describe("#getSchemaByPath", function(){
        beforeEach(function(){
            this.fp = FirestorePlus(firebase, true)
            this.fp.use(new plugins.SchemaPlugin())
            this.schemas = {
                collection : this.fp.schema.model('test', {}),
                subcollection : this.fp.schema.model('test/:subcollection/test', {})
            }
        })
        it("should retrieve collection", function(){
            const schema = this.fp.schema.model('test', {})
            const s2 = this.fp.schema.getSchemaByPath('test/id')
            assert.strictEqual(s2, schema)
        })
        it("should retrieve subcollection", function(){
            const schema = this.fp.schema.model('test/id/test', {})
            const s2 = this.fp.schema.getSchemaByPath('test/id/test/id')
            assert.strictEqual(s2, schema)
        })
    })
})