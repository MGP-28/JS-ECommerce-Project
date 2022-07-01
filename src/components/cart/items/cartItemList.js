import { renderCartItem } from "./cartItem";

function render(products){
    const cartListEl = document.createElement('ul')
    cartListEl.classList.add('px-5', 'bg-white', 'rounded-md', 'h-min')

    products.forEach(element => {
        cartListEl.append(renderCartItem(element))
    });

    //events
    

    deleteContainerEl.append(deleteEl)

    return deleteContainerEl
}

export {render as renderCartList}