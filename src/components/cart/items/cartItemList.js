import { getStoredCartItems } from "../../../store/products";
import { renderCartItem } from "./cartItem";

function render(){

    const cartView = document.querySelector('#cart')

    cartView.querySelector('#cart-empty-message').classList.add('hidden')

    const cartListEl = document.createElement('ul')
    cartListEl.classList.add('px-5', 'bg-white', 'rounded-md', 'h-min')

    if(!renderItems(cartView, cartListEl)) {
        document.dispatchEvent(new Event('cartEmpty'))
    }

    //events
    document.addEventListener('cartChanged', (e) => {
        if(e.detail) renderItems(cartView, cartListEl)
    })

    return cartListEl
}

function renderItems(cartView, cartListEl){
    const cartItems = getStoredCartItems()
    if(cartItems.length == 0) return false
    cartView.querySelector('#cart-empty-message').classList.add('hidden')
    cartView.querySelector('#cart-list-grid').classList.remove('hidden')
    cartListEl.textContent = ''
    cartItems.forEach(element => {
        cartListEl.append(renderCartItem(element))
    });
    return true
}

export {render as renderCartList}