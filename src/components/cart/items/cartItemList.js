import { getStoredCartItems } from "../../../store/products";
import { renderCartItem } from "./cartItem";

const cartListEl = document.createElement('ul')

function render(){
    cartListEl.classList.add('px-5', 'bg-white', 'rounded-md', 'h-min')

    renderItems()

    //events
    document.querySelector('#cart').addEventListener('cartChanged', () => {
        renderItems()
    })

    return cartListEl
}

function renderItems(){
    const cartItems = getStoredCartItems()
    cartListEl.textContent = ''
    cartItems.forEach(element => {
        cartListEl.append(renderCartItem(element))
    });
}

export {render as renderCartList}