import { getStoredCoupon, getStoredTotals } from "../store/products";
import { getCartItems } from "./json/getCartItems";

function sendPurchase(){
    
    const purchaseJSON = buildJSON()




}

function buildJSON(){

    const {discountedTotal} = getStoredTotals()

    const couponcode = getStoredCoupon()
    
    const cartItems = getCartItems()

    //rebuilds cartItems into only their IDs and Quantity
    let productsToPurchase = []
    cartItems.forEach(product => {
        const {id, quantity} = product
        productsToPurchase.push({id: id, quantity: quantity})
    });

    return JSON.stringify({
        couponcode: couponcode,
        amount: discountedTotal,
        products: productsToPurchase
    })
}

export {sendPurchase}