import { getProductsFromAPI } from "./getProducts";

export async function getProducts(){
    
    let retries = 50

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

    return products

}

/*async function callAgain(){
    setTimeout(() => {
        getProducts()
    }, 1500);
}*/