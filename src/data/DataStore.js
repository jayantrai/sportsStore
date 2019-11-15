import { createStore } from 'redux'
import { ShopReducer } from './ShopReducer'

export const SportsStoreDataStore = createStore(ShopReducer)

// final step for creating the data store 