import { Product } from "../model/product";
import { getCoupon } from "../services/json/getCoupon";
import { resetCoupon } from "../services/json/resetCoupon";
import { setCoupon } from "../services/json/setCoupon";
import { applyDiscount, couponError } from "../views/cart";

let products = []

let couponCode = getCoupon()

// add products

export function addProducts(arrProductsAPI){
    arrProductsAPI.forEach( element => {
        addProduct(element)
    });
}

function addProduct(productAPI){
    const {id, title, description, price, imate, rating} = productAPI
    const product = new Product(
        id, title, description, price, imate, rating
    )
    products.push(product)
}

// rating

export function updateRating(product, rating){
    product.updateRating(rating)
}

// cart

export function addUnitToCart(product){
    product.addUnitToCart()
}

export function removeUnitFromCart(product, removeAll = false){
    if (removeAll) { 
        product.deleteFromCart()
        return
    }
    if (product.quantity > 1) {
        product.removeUnitFromCart()
    }
}

export function getCartItems(){
    const cartItemsIds = getCartItems()

    let cartItems = []

    for (let product in products) {
        if(cartItemsIds.includes(product.id)) cartItems.push(product)
    }

    return cartItems
}

// coupon

export function getStoredCoupon(){
    return couponCode
}

export async function setStoredCoupon(coupon){
    const couponResult = await setCoupon(coupon)

    if(verifCouponResult == NaN) {
        couponCode = ''
        couponError(couponResult)
        return
    }

    couponCode = coupon
    applyDiscount(couponResult)
    
}

export function resetStoredCoupon(){
    resetCoupon()
    couponCode = ''
}