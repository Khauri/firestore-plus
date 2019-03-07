/**
 * Unit tests for Schema Builder
 */
import { assert, expect } from 'chai'

import { SchemaBuilder, Schema, FieldTypes } from '../src'

 describe('SchemaBuilder', function(){
     it('should return Schema', function(){
        assert.isTrue(Schema.isPrototypeOf(SchemaBuilder({})))
     })

     it('should set field types', function(){
         const schema = SchemaBuilder({
             fields : {
                 number : FieldTypes.number(),
                 nested : {
                    type : FieldTypes.number(),
                    default : 5
                 }
             },
         })
         expect(schema.fieldTypes).to.have.nested.property('number')
         expect(schema.fieldTypes).to.have.nested.property('nested')
         expect(schema.fieldTypes).to.not.have.nested.property('nested.default', 5)
         expect(schema.defaultFields).to.have.nested.property('nested', 5)
     })

     it('should set static methods', function(){
         const schema = SchemaBuilder({
             statics : {
                 do : function(){},
                 or : function(){},
                 di : function(){}
             }
         })
         expect(schema).to.haveOwnProperty('do')
         expect(schema).to.haveOwnProperty('or')
         expect(schema).to.haveOwnProperty('di')
         expect(schema).to.not.haveOwnProperty('die')
     })

     it('should set instance methods', function(){
        const schema = SchemaBuilder({
            methods : {
                do : function(){},
                or : function(){},
                di : function(){}
            }
        })
        const instance = new schema()
        expect(instance).to.have.property('do')
        expect(instance).to.have.property('or')
        expect(instance).to.have.property('di')
     })
 })