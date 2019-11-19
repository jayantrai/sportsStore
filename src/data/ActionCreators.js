import { ActionTypes } from "./Types";
// import { data as phData} from "./placeholderData";
import { RestDataSource } from './RestDataSource'

const dataSource = new RestDataSource()

export const loadData = (dataType, params) => ({
    type: ActionTypes.DATA_LOAD,
    payload:
        // dataType: dataType,
        // data: phData[dataType]
       dataSource.GetData(dataType, params)
       .then(response => ({ dataType,
       data: response.data,
       total: Number(response.headers["x-total-count"]),
       params
       })
       )
    
});

// fourth
// types and placeholder data was merged in this file
//  action creator function creates an object that can be processed by the data 
//  store to alter the data it contains

// when the action object created by the loaddata function is received by 
// the data store the middleware will wait for the response to be received 
// from the webservice and then pass on the action for normal processing (remotely)