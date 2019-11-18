// creating a data source 
// to consolidate the code that is responsible for sending HTTP requests

import Axios from 'axios'
import { RestUrls } from './Urls'

export class RestDataSource {
    GetData = (dataType) =>
    this.SendRequest("get", RestUrls[dataType])

    SendRequest = (method, url) => Axios.request({ method, url})
}


// axios makes http requests to the web service 
// getData method uses axios to send an http request to the webs servie 
// to get all of the available objects for a specified data type