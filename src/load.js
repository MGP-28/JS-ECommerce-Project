import { getProducts } from './services/getProductsLoop.js'
import { reserveLocalStorage } from './services/json/reserveLocal.js'
import { addProducts } from './store/products.js'
import { buildUI } from './views/buildUI.js'
import { loadEvents } from './views/events/loadEvents.js'

export async function load(){
    //local storage check
    reserveLocalStorage()
    //build UI
    buildUI()
    //UI events
    loadEvents()
    //get products from API
    const productsAPI = await getProducts()
    
    await (productsAPI) 
        ? addProducts(productsAPI) //send received products into Store
        : document.querySelector('#app')//.append(renderPopup(false, 'Error loading products, please refresh the page!'))
}