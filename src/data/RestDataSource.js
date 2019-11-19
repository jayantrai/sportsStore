// creating a data source 
// to consolidate the code that is responsible for sending HTTP requests

import Axios from 'axios'
import { RestUrls }  from './Urls'

export class RestDataSource {
    GetData = async(dataType, params) =>
    this.SendRequest("get", RestUrls[dataType], params)

    SendRequest = (method, url, params) => Axios.request({ method, url, params})
}


// axios makes http requests to the web service 
// getData method uses axios to send an http request to the webs servie 
// to get all of the available objects for a specified data type