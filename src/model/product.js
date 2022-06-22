export class Product{
    constructor(id, title, description, price, image, rating) {
        this.id = id
        this.title = title
        this.description = description
        this.price = price
        this.image = image
        this.rating = rating
        this.quantity = 0;
    }

    deleteFromCart(){
        this.quantity = 0
    }

    addUnitToCart(){
        this.quantity += 1
    }

    removeUnitFromCart(){
        if(this.quantity > 0) this.quantity -= 1
    }

}
