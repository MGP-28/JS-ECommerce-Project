export function getCartItems(){

    const products = JSON.parse(localStorage.getItem("products"))

    let cartItems = []

    if(products.count >= 1){
        products.forEach(element => {
            if(element.quantity > 0) cartItems.push(element.id)
        });
    }

    return cartItems

}