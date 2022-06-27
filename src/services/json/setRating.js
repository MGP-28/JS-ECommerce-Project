export function setRating(id, value){

    const products = JSON.parse(localStorage.getItem("products"))

    let verif = false

    if(products.count >= 1){

        for (let element in products) {
            if(element.id == id) {
                element.rating = rating
                verif = true
                break
            }
        };
         
    }

    if(!verif){
        const product = {
            id: id,
            quantity: quantity,
            rating: false
        }
        products.push(product)
    }

    localStorage.setItem("products", JSON.stringify(products))

}