import { assert, expect, use } from 'chai'
import sinonChai from 'sinon-chai'
import { stub, spy, createSandbox, SinonSandbox, SinonStub, SinonSpy, SinonMock } from 'sinon'
import firebase from 'firebase'

firebase.initializeApp({
    projectId : 'not-a-project'
})

// Stub DocumentSnapshot so that it returns the first argument passed to it
// This needs to be done before FireStorePlus is initialized
const DataStub = stub(firebase.firestore.DocumentSnapshot.prototype, 'data')
    

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
    function shouldBehaveLikeSchema(){

        beforeEach(function(){
            this.schemas = {
                collection : this.firestorePlus.model('test', this.schema),
                subcollection : this.firestorePlus.model('test/:subcollection/test', this.schema)
            }
        })

        it("should be instance of schema", function(){
            for(let schema in this.schemas){
                assert.isTrue(Schema.isPrototypeOf(this.schemas[schema]))
            }
        })

        it("__is_firestore_plus_schema__ is true", function(){
            assert.isTrue(this.schemas.collection.__is_firestore_plus_schema__)
        })

        it("should validate", async function(){
            /** @type {SinonSandbox} */
            const sandbox = this.sandbox
            // TODO: Add these to a separate file(?)
            const path = 'test/testPath'

            const data = {
                test : 'data'
            }
            // Spy on the validate function
            const spy = sandbox.spy(Schema, 'validate')
            DataStub.returns(data)
            // Trigger DocumentSnapshot data call
            const result = firebase
                .firestore
                .DocumentSnapshot
                .prototype
                .data
                .call(createDocumentSnapshot(path, data))

            assert.deepEqual(result, data)
            // TODO: This is called an insane amount of times for some reason
            // I'm not sure if it's just the test though
            expect(spy).to.have.been.called
        })
    }

    beforeEach(function(){
        console.log("Refreshing")
        this.firestorePlus = new FirestorePlus(firebase)
    })

    context('using class construction', function(){
        beforeEach(function(){
            this.schema = class extends Schema {

            }
        })
        shouldBehaveLikeSchema()
    })

    context('using object construction', function(){
        beforeEach(function(){
            this.schema = {
                fields : {},
            }
        })
        shouldBehaveLikeSchema()
    })
})