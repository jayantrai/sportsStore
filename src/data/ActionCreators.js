import { ActionTypes } from "./Types";
import { data as phData} from "./placeholderData";

export const loadData = (dataType) => ({
    type: ActionTypes.DATA_LOAD,
    payload: {
        dataType: dataType,
        data: phData[dataType]
    }
});

// fourth
// types and placeholder data was merged in this file
//  action creator function creates an object that can be processed by the data 
//  store to alter the data it contains