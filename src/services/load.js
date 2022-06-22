import { getProducts } from './getProducts.js'
import { addProducts } from '../store/products.js'

export async function load(){
    //get products from API
    const productsAPI = await getProducts()
    //insert them into store array
    addProducts(productsAPI)
}

