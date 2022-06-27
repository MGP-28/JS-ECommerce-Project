import { getProducts } from './services/getProducts.js'
import { reserveLocalStorage } from './services/json/reserveLocal.js'
import { addProducts } from './store/products.js'

export async function load(){
    //local storage check
    reserveLocalStorage()
    //get products from API
    const productsAPI = await getProducts()
    //insert them into store array
    addProducts(productsAPI)
}