import { getCartCount } from "../services/json/getCartCount"
import { getRating } from "../services/json/getRating"
import { setCartCounter } from "../services/json/setCartCounter"
import { setRating } from "../services/json/setRating"

// product class properties

export class Product{
    constructor(id, title, description, price, image, rating) {
        this.id = id
        this.title = title
        this.description = description
        this.price = price
        this.image = image
        this.rating = this.getStoredRating(rating) // check localStorage for user defined rating
        this.quantity = this.getStoredCartCounter() // check LocalStorage user cart quantity
    }

    deleteFromCart(){
        this.quantity = 0
        setCartCounter(this.id, this.quantity)
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
        const cartCounterLocal = getCartCount(this.id)
        return (cartCounterLocal) ? cartCounterLocal : 0
    }

    updateRating(rating){
        this.rating = rating
        setRating(this.id, rating)
    }

    getStoredRating(ratingAPI){
        const ratingStored = getRating(this.id)
        return (ratingStored) ? ratingStored : ratingAPI
    }

}
