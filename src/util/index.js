class chainHandler {
    constructor(data={}){
        Object.assign(this, data)
        this._stopped = false
        this._next = true
        this._val = null
        // eagerly awaiting class properties being standardized
        // this.done = this.done.bind(this)
        this.next = this.next.bind(this)
        this.resolve = this.resolve.bind(this)
        this.stop = this.stop.bind(this)
    }
    /**
     * Calls the next function with the arguments supplied
     * @param  {...any} args 
     */
    next(args){
        if(args && args.length){
            this.args = args
        }
        this._next = true
    }
    /**
     * Immediately stops the chain and returns the value supplied
     * @param {*} val 
     */
    resolve(val){
        this._val = val
        this._next = false
        this.stop()
    }
    /**
     * Stops the chain. Doesn't necesarily prevent the old function
     * from being called afterwards unless resolved first
     */
    stop(){
        this._stopped = true
    }
}

export const createFunctionHandler = (fp, oldFn, newFn, isAsync=false, position ) => {
    // if already stubbed
    const key = '__firestore_plus_stubbed_fn__'
    // console.log("old, new", oldFn[key])
    if(oldFn[key]){
        if(oldFn[key].fp === fp){
            oldFn[key].queue.push(newFn)
            return oldFn
        }
        oldFn = oldFn[key].oldFn
    }
    let handler,
        queue = [ newFn ]
    if(isAsync){
        handler = async function(...args){
            const chain = new chainHandler({ wrapped : oldFn, fp, context : this, args })
            for(let handler of queue){
                await handler.call(this, chain)
                if(chain._stopped === true){
                    break
                }
            }
            if(chain._next === true){
                return await oldFn(...chain.args)
            }
            return chain._val
        }
    }else{
        handler = function(...args){
            const chain = new chainHandler({ wrapped : oldFn, fp, context : this, args })
            for(let handler of queue){
                handler.call(this, chain)
                if(chain._stopped === true){
                    break
                }
            }
            if(chain._next === true){
                return oldFn(...chain.args)
            }
            return chain._val
        }
    }
    handler[key] = { queue, fp, oldFn }
    return handler
}
/**
 * 
 * @param {*} fp 
 * @param {*} target 
 * @param {*} path 
 * @param {*} value 
 * @param {*} isAsync 
 * @param {'before'|'default'|'after'} position The point in the chain the function will be run
 */
export function overwrite(fp, target, path, value, isAsync, position="default"){
    const last = path.pop() 
    let curr = target
    let part 
    while(part = path.shift()){
        if(!curr[part]){
            curr[part] = part
        }
        curr = curr[part]
    }
    if(typeof curr[last] !== 'function'){
        curr[last] = value
        return
    }
    curr[last] = createFunctionHandler(fp, curr[last], value, isAsync, position)
}