export function getRating(id){

    const products = JSON.parse(localStorage.getItem("products"))

    const productLS = products.find(element => element.id == id)

    return (productLS) ? productLS.rating : false

}