import { ActionTypes } from "./Types";

export const ShopReducer = (storeData, action) => {
    switch(action.type) {
        case ActionTypes.DATA_LOAD:
            return { 
                ...storeData, 
                [action.payload.dataType]: action.payload.data,
                [`${action.payload.dataType}_total`]: action.payload.total,
                [`${action.payload.dataType}_params`]: action.payload.params 
            };
        default:
            return storeData || {};
    }
}


// fifth
// actions are processed by data store reducers 
// they receive current contents of the data store and an action 
// object and use them to make changes 
// they are required to create and return new objects that incorporate any
// required changes