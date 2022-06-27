export function getCartItems(){

    const products = JSON.parse(localStorage.getItem("products"))

    return products.filter(element => element.quantity > 0)

}