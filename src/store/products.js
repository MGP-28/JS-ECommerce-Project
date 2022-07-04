import { Product } from "../model/product";
import { getCoupon } from "../services/json/getCoupon";
import { resetCoupon } from "../services/json/resetCoupon";
import { setCoupon } from "../services/json/setCoupon";
import { applyDiscount, couponError } from "../views/cart";

let products = []

let cartItemsIds = []

let couponCode = getCoupon()

export function addProducts(arrProductsAPI){
    arrProductsAPI.forEach( element => {
        addProduct(element)
    });
    document.dispatchEvent(new Event ('productsLoaded'))
}

function addProduct(productAPI){
    const {id, title, description, price, image} = productAPI
    const rating = Math.round(productAPI.rating.rate)
    const product = new Product(
        id, title, description, price, image, rating
    )
    products.push(product)
}

// rating

export function updateStoredRating(product, rating){
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

    //needs work

    const couponResult = await setCoupon(coupon)

    if(verifCouponResult == NaN) {
        couponCode = ''
        document.querySelector('#cart').dispatchEvent(new CustomEvent('couponError', {detail: {error: couponError}}))
        return
    }

    couponCode = coupon
    document.querySelector('#cart').dispatchEvent(new CustomEvent('applyDiscount', {detail: {couponCode: couponCode}}))
}

export function resetStoredCoupon(){
    resetCoupon()
    couponCode = ''
}