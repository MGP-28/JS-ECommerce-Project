import { Product } from "../model/product";
import { getCartItems } from "../services/json/getCartItems";
import { getCoupon } from "../services/json/getCoupon";
import { setCoupon } from "../services/json/setCoupon";

let products = []

let cartItemsIds = []

let coupon = getCoupon()

let contacts = []

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
    if(!cartItemsIds) document.dispatchEvent(new Event('cartEmpty'))
}

export function getStoredProducts(){
    return products
}

// rating

export function updateStoredRating(product, rating){
    product.updateRating(rating)
}

// cart

export function addUnitToCart(product){
    
    product.addUnitToCart()
    
    if (!cartItemsIds.includes(product.id)) cartItemsIds.push(product.id);

    document.dispatchEvent(new CustomEvent('cartChanged', {detail: (product.quantity == 1)}))
}

export function removeUnitFromCart(product, removeAll = false){
    if (removeAll) { 
        product.deleteFromCart()
        cartItemsIds = cartItemsIds.filter(el => el != product.id)
        if(cartItemsIds.length == 0) {document.dispatchEvent(new Event('cartEmpty'))}
        return
    }
    if (product.quantity > 1) {
        product.removeUnitFromCart()
        return true
    }
}

export function getStoredCartItems(){

    const cartItems = products.filter(el => cartItemsIds.includes(el.id))

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
        if(coupon.code) cartView.dispatchEvent(new Event('resetDiscount'))
        else cartView.dispatchEvent(new Event('couponNotFound'))
        coupon.code = ''
        coupon.discount = ''
        setCoupon(couponCode)
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

export function getStoredTotals(){
    const cartItems = getStoredCartItems()
    const baseSum = cartItems.reduce((sum, product) => {
        return sum + (product.price * product.quantity)
    },0);
    const discountedTotal = baseSum - (baseSum * (coupon.discount / 100))

    return {subtotal: baseSum, discountedTotal: discountedTotal}
}

export function resetPurchases(){
    getStoredCartItems().forEach(element => {
        removeUnitFromCart(element, true)
    });
    setStoredCoupon('')
}