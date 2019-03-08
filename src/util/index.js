class chainHandler {
    constructor(data={}){
        Object.assign(this, data)
        this.current = null
        this.isCanceled = false
        // eagerly awaiting class properties being standardized
        this.done = this.done.bind(this)
        this.stop = this.stop.bind(this)
    }
    done(val){
        this.current = val 
    }
    stop(){
        this.isCanceled = true
    }
}

export const createFunctionHandler = (fp, oldFn, newFn, isAsync=false, ...extra) => {
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
            const chain = new chainHandler({ wrapped : oldFn, fp, context : this})
            // console.log("Async", queue, chain)
            for(let handler of queue){
                await handler.call(this, chain, ...args)
            }
            return chain.current
        }
    }else{
        handler = function(...args){
            const chain = new chainHandler({ wrapped : oldFn, fp, context : this })
            for(let handler of queue){
                handler.call(this, chain, ...args)
                if(chain.isCanceled){
                    break
                }
            }
            return chain.current
        }
    }
    handler[key] = { queue, fp, oldFn }
    return handler
}

export function overwrite(fp, target, path, value, isAsync, ...extra){
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
    curr[last] = createFunctionHandler(fp, curr[last], value, isAsync, ...extra)
}