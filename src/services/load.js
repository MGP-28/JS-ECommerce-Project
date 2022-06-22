import { getProducts } from './getProducts.js'
import { addProducts } from '../store/products.js'

export async function load(){
    const productsAPI = await getProducts()
    addProducts(productsAPI)
    //NOT WORKING
}

