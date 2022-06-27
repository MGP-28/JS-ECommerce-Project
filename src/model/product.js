import { getCartCount } from "../services/json/getCartCount"
import { getRating } from "../services/json/getRating"
import { setCartCounter } from "../services/json/setCartCounter"
import { setRating } from "../services/json/setRating"

export class Product{
    constructor(id, title, description, price, image, rating) {
        this.id = id
        this.title = title
        this.description = description
        this.price = price
        this.image = image
        this.rating = this.getStoredRating(rating)
        this.quantity = this.getStoredCartCounter();
    }

    deleteFromCart(){
        this.quantity = 0
        setCartCounter(this.id, 0)
    }

    addUnitToCart(){
        this.quantity += 1
        setCartCounter(this.id, this.quantity)
    }

    removeUnitFromCart(){
        if(this.quantity > 0) this.quantity -= 1
        setCartCounter(this.id, this.quantity)
    }

    getStoredCartCounter(){
        const cartConterLocal = getCartCount()
        this.quantity = (cartConterLocal) ? cartConterLocal : 0
    }

    updateRating(rating){
        this.rating = rating
        setRating(rating)
    }

    getStoredRating(rating){
        const ratingStored = getRating()
        this.rating = (ratingStored) ? ratingStored : rating
    }

}
