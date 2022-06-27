export function setRating(id, rating){

    const products = JSON.parse(localStorage.getItem("products"))

    let productExists = false

    const productLS = products.find(element => element.id == id)

    if(productLS) { productLS.rating = rating; productExists = true }

    if(!productExists){
        const product = {
            id: id,
            quantity: 0,
            rating: rating
        }
        products.push(product)
    }

    localStorage.setItem("products", JSON.stringify(products))

}