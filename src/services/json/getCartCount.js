export function getCartCount(id){

    // function to 
    const products = JSON.parse(localStorage.getItem("products"))

    const productLS = products.find(element => element.id == id)

    return (productLS) ? productLS.quantity : false

}