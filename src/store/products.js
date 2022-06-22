import { Product } from "../model/product";

let products = []

export function addProducts(arrProductsAPI){
    arrProductsAPI.forEach( element => {
        addProduct(element)
    });
}

function addProduct(productAPI){
    const {id, title, description, price, imate, rating} = productAPI
    const product = new Product(
        id, title, description, price, imate, rating
    )
    products.push(product)
}