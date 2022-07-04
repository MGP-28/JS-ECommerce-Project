import { getProductsFromAPI } from "./getProducts";

export async function getProducts(){
    
    let retries = 20

    let products = []

    while(retries > 0){
        try{
            products = await getProductsFromAPI()
            break
        } catch (error){
            retries--
            console.log(`error -> retries left: ${retries}`)
        }    
    }

    return (retries == 0) 
        ? console.log('couldnt load products')
        : products
}