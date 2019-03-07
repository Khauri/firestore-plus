import { assert, expect, use } from 'chai'
import sinonChai from 'sinon-chai'
import { stub, spy, createSandbox, SinonSandbox, SinonStub, SinonSpy, SinonMock } from 'sinon'

import { client, admin } from './firebase'

import FirestorePlus, { Schema } from '../src'

describe('FirestorePlus', function(){
    describe("#isSchema", function(){
        describe("with Schema", function(){
            it("should return true", function(){
                class MySchema extends Schema {}
                assert.isTrue(FirestorePlus.isSchema(MySchema))
            })
        })
        describe("with other values", function(){
            it("should return false", function(){
                assert.isFalse(FirestorePlus.isSchema(0), 'Falsy Number')
                assert.isFalse(FirestorePlus.isSchema(null), 'Null')
                assert.isFalse(FirestorePlus.isSchema(false), 'Falsy Boolean')
                assert.isFalse(FirestorePlus.isSchema(true), 'Truthy Boolean')
                assert.isFalse(FirestorePlus.isSchema(Date), 'Object')
                assert.isFalse(FirestorePlus.isSchema({}), 'Plain Object')
            })
        })
    })

    describe("#constructor",function(){
        describe("with no arguments", function(){
            it("should throw TypeError", function(){
                expect(()=>new FirestorePlus()).to.throw(TypeError)
            })
        })
        describe("with incorrect argument", function(){
            it("should throw TypeError", function(){
                expect(()=>new FirestorePlus({})).to.throw(TypeError)
            })
        })
    })

    describe("#model", function(){
        beforeEach(function(){
            this.fp = new FirestorePlus(client)
        })
        describe("with missing schema", function(){
            it("should throw TypeError", function(){
                expect(()=>this.fp.model('test', null)).to.throw(TypeError)
            })
        })
        describe("with missing path", function(){
            it("should throw TypeError", function(){
                expect(()=>this.fp.model(null, {})).to.throw(TypeError)
            })
        })

        describe("using class", function(){
            it("should throw TypeError if class is not schema", function(){
                class MySchema {}
                expect(()=>this.fp.model('test', MySchema)).to.throw(TypeError)
            })
            it("should return passed in schema", function(){
                class MySchema extends Schema {}
                const schema = this.fp.model('test', MySchema)
                assert.strictEqual(MySchema, schema)
            })
        })
        describe("using object", function(){
            it("should return Schema object", function(){
                const schema = this.fp.model('test', {})
                assert.isTrue(Schema.isPrototypeOf(schema))
            })
        })
    })
})