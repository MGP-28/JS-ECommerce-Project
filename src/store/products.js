import { Product } from "../model/product";
import { getCartItems } from "../services/json/getCartItems";
import { getCoupon } from "../services/json/getCoupon";
import { setCoupon } from "../services/json/setCoupon";

let products = []

let cartItemsIds = []

let coupon = getCoupon()

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
    return coupon.code
}

export function getStoredDiscount(){
    return coupon.discount
}

export async function setStoredCoupon(couponCode){
    
    const cartView = document.querySelector('#cart')

    if(!couponCode) {
        coupon.code = ''
        coupon.discount = ''
        setCoupon(couponCode)
        cartView.dispatchEvent(new Event('resetDiscount'))
        return
    }

    const couponResponse = await setCoupon(couponCode)

    if(!couponResponse){ cartView.dispatchEvent(new Event('couponError')); return }

    if(!couponResponse.response) {
        coupon.code = ''
        coupon.discount = ''
        cartView.dispatchEvent(new CustomEvent('couponNotFound', {detail: {error: couponResponse.message}}))
    }
    else{
        coupon.code = couponResponse.coupon.code
        coupon.discount = couponResponse.coupon.discount
        cartView.dispatchEvent(new CustomEvent('applyDiscount', {detail: {coupon: couponResponse.coupon}}))
    }

}