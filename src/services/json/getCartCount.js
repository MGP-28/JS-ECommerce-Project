export function getCartCount(id){

    const products = JSON.parse(localStorage.getItem("products"))

    if(products.count >= 1){
        products.forEach(element => {
            if(element.id == id) return element.quantity
        });
    }

    return false

}