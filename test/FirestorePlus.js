import { assert, expect, use } from 'chai'
import sinonChai from 'sinon-chai'
import { stub, spy, createSandbox, SinonSandbox, SinonStub, SinonSpy, SinonMock } from 'sinon'

use(sinonChai)

import { client, admin } from './firebase'

import FirestorePlus, { plugins, FirestorePlusPlugin } from '../src'

console.log(plugins)

describe('FirestorePlus', function(){
    beforeEach(function(){
        this.sandbox = createSandbox()
    })
    afterEach(function(){
        /** @type {SinonSandbox} */
        const sandbox = this.sandbox
        sandbox.restore()
    })
    describe("initialization", function(){
        it("should attach plus function", function(){
            FirestorePlus(client)
            assert.exists(client.firestore().plus)
        })

        describe("with no arguments", function(){
            it("should throw TypeError", function(){
                expect(()=> FirestorePlus()).to.throw(TypeError)
            })
        })

        describe("with incorrect argument", function(){
            it("should throw TypeError", function(){
                expect(()=> FirestorePlus({})).to.throw(TypeError)
            })
        })
    })
    describe("plus()", function(){
        it("should return instance", function(){
            const instance = FirestorePlus(client, true)
            assert.equal(instance, client.firestore().plus())
        })
    })
    describe("plus(FirestorePlusPlugin)", function(){
        it("should throw TypeError if no default name for plugin", function(){
            FirestorePlus(client, true)
            expect(()=>client.firestore().plus(new FirestorePlusPlugin())).to.throw(TypeError)

        })

        it("should attach using default name", function(){
            const instance = FirestorePlus(client, true)
            const plugin = new plugins.SchemaPlugin()
            assert.notExists(instance[plugin.defaultName])
            client.firestore().plus(plugin)
            assert.exists(instance[plugin.defaultName])
        })

        it("should attach using default id", function(){
            const instance = FirestorePlus(client, true)
            const plugin = new plugins.SchemaPlugin()
            assert.notExists(instance.plugins[plugin.id])
            client.firestore().plus(plugin)
            assert.exists(instance.plugins[plugin.id])
        })

        it("should call FirestorePlus.use", function(){
            /** @type {SinonSandbox} */
            const sandbox = this.sandbox
            const { SchemaPlugin } = plugins
            const instance = FirestorePlus(client, true)
            const spy = sandbox.spy(instance, 'use')

            client.firestore().plus(new SchemaPlugin())
            expect(spy).to.have.been.calledOnce
        })
    })

    describe("plus({[key: string] : FirestorePlusPlugin})", function(){

        // it("should attach all by name", function(){
        //     /** @type {SinonSandbox} */
        //     const sandbox = this.sandbox
        //     const { SchemaPlugin } = plugins
        //     const instance = FirestorePlus(client)
        //     const spy = sandbox.spy(instance, 'plugin')

        //     client.firestore().plus(new SchemaPlugin())
        //     expect(spy).to.have.been.calledOnce
        // })
    })
})
