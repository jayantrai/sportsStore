import { createStore, applyMiddleware } from 'redux'
import { ShopReducer } from './ShopReducer'
import { CartReducer } from './CartReducer'
import { CommonReducer } from './CommonReducer'
import { asyncActions } from './AsyncMiddleware'

export const SportsStoreDataStore
= createStore(CommonReducer(ShopReducer, CartReducer),
applyMiddleware(asyncActions))

// final step for creating the data store 
// the apply middleware is used to wrap the middleware so that it receives 
// the actions and the result is passed as an argument to the createstore 
// function that creates the data store
