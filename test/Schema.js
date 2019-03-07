import { assert, expect, use } from 'chai'
import sinonChai from 'sinon-chai'
import { stub, spy, createSandbox, SinonSandbox, SinonStub, SinonSpy, SinonMock } from 'sinon'
import { client as firebase, admin } from './firebase'

// Stub DocumentSnapshot so that it returns the first argument passed to it
// This needs to be done before FireStorePlus is initialized
const documentSnapshotDataStub = stub(firebase.firestore.DocumentSnapshot.prototype, 'data')
    

import FirestorePlus, { Schema, FieldTypes } from '../src'

use(sinonChai)

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

beforeEach(function(){
    this.sandbox = createSandbox()
})

afterEach(function(){
    this.sandbox.restore()
})

describe('Schema Tests', function(){
    /**
     * Expects firestorePlus and schema
     */
    beforeEach(function(){
        this.firestorePlus = new FirestorePlus(firebase)
        const schema = {}
        this.schemas = {
            collection : this.firestorePlus.model('test', schema),
            subcollection : this.firestorePlus.model('test/:subcollection/test', schema)
        }
    })

    describe(".validate", function(){
        it("should be called when DocumentSnapshot#data called", async function(){
            /** @type {SinonSandbox} */
            const sandbox = this.sandbox
            // Spy on the validate function
            const spy = sandbox.spy(Schema, 'validate')
            
            // Trigger DocumentSnapshot data call
            const [result, data] = callData()

            assert.deepEqual(result, data)
            // TODO: This is called an insane amount of times for some reason
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