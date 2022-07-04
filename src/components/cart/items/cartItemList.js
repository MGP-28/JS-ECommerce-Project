import { renderCartItem } from "./cartItem";

function render(products){
    const cartListEl = document.createElement('ul')
    cartListEl.classList.add('px-5', 'bg-white', 'rounded-md', 'h-min')

    /*products.forEach(element => {
        cartListEl.append(renderCartItem(element))
    });*/

    //placeholder
    for (let index = 0; index < 6; index++) {
        cartListEl.append(renderCartItem()) 
    }

    //events
    

    return cartListEl
}

export {render as renderCartList}