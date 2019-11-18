const isPromise = (payload) =>
    (typeof(payload) === 'object' || typeof(payload) === 'function')
    && typeof(payload.then) === 'function'


export const asyncActions = () => (next) => (action) => {
    if (isPromise(action.payload)) {
        action.payload.then(result => next({...action, payload: result}))
    } else {
        next(action)
    }
}

// page 134
// redux data stores can be extended to support asynchronous operations 
// using a middleware function which inspects the actions that are sent to
// the data store and alters them before they are processed
// the function checks to see whether an acion's apyload is a promise 
// which it does by looking for function or objects that have a then function