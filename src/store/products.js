import { Product } from "../model/product";
import { getCoupon } from "../services/json/getCoupon";
import { resetCoupon } from "../services/json/resetCoupon";
import { setCoupon } from "../services/json/setCoupon";
import { applyDiscount, couponError } from "../views/cart";

let products = []

let couponCode = getCoupon()

//testing

/*function test(){

    const shop = document.querySelector('#shop')
    const btn = document.createElement('button')
    btn.textContent = 'CLICK ME'
    btn.addEventListener('click', (e) => {
        products.forEach(element => {
            console.log(element)
            //const product = products[0]
            //removeUnitFromCart(product, true)
            //addUnitToCart(product)
            //updateStoredRating(product, 1)
        });
    })
    shop.append(btn)
}*/

// add products

export function addProducts(arrProductsAPI){
    arrProductsAPI.forEach( element => {
        addProduct(element)
        console.log(element.image)
    });    
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