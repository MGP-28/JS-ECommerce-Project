import { Product } from "../model/product";
import { getCartItems } from "../services/json/getCartItems";
import { getCoupon } from "../services/json/getCoupon";
import { resetCoupon } from "../services/json/resetCoupon";
import { setCoupon } from "../services/json/setCoupon";

let products = []

let cartItemsIds = []

let couponCode = getCoupon()

export function addProducts(arrProductsAPI){
    arrProductsAPI.forEach( element => {
        addProduct(element)
    });

    loadCartItems()
    
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

function loadCartItems(){
    const cartItems = getCartItems()
    cartItems.forEach(element => {
        cartItemsIds.push(element.id)
    });
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
        cartItemsIds = cartItemsIds.filter(el => el != product.id)
        return
    }
    if (product.quantity > 1) {
        product.removeUnitFromCart()
        return true
    }
}

export function getStoredCartItems(){

    let cartItems = products.filter(el => cartItemsIds.includes(el.id))

    return cartItems
}

// coupon

export function getStoredCoupon(){
    return couponCode
}

export async function setStoredCoupon(coupon){

    const couponResponse = await setCoupon(coupon)

    const cartView = document.querySelector('#cart')

    if(!couponResponse){ cartView.dispatchEvent(new Event('couponError')); return }

    if(!couponResponse.response) {
        couponCode = ''
        cartView.dispatchEvent(new CustomEvent('couponNotFound', {detail: {error: couponResponse.message}}))
        return
    }

    couponCode = coupon
    cartView.dispatchEvent(new CustomEvent('applyDiscount', {detail: {coupon: couponResponse.coupon}}))
}

export function resetStoredCoupon(){
    resetCoupon()
    couponCode = ''
    console.log('coupon => ' + couponCode)
}