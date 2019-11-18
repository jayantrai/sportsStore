// to avoid hard coding the URLs into individual JS files, I have created
// this file to define the configuration data 

import { DataTypes } from './Types'

const protocol = 'http'
const hostname = 'localhost'
const port = 3500

export const RestUrls = {
    [DataTypes.PRODUCTS]: `${protocol}://${hostname}:${port}/api/products`,
    [DataTypes.CATEGORIES]: `${protocol}://${hostname}:${port}/api/categories`
}