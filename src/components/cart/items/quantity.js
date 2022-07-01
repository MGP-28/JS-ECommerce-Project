import { renderGenericCartButton } from "./generic/cartButton"

function render(product){
    const cartItemQuantityEl = document.createElement('div')
    btnEl.classList.add('flex')

    cartItemQuantityEl.append(minusBtn())
    cartItemQuantityEl.append(quantityDisplay())
    cartItemQuantityEl.append(plusBtn())

    return cartItemQuantityEl
}

function minusBtn(){
    const minusBtn = renderGenericCartButton('minus')

    //events


    return minusBtn
}

function quantityDisplay(){
    const quantityDisplayContainerEl = document.createElement('div')
    quantityDisplayContainerEl.classList.add('border-2', 'border-gray-300', 'rounded', 'shadow', 'w-10', 'h-10', 'flex', 'justify-center', 'items-center')
    const quantityDisplayEl = document.createElement('span')
    quantityDisplayContainerEl.append(quantityDisplayEl)

    //events


    return quantityDisplayContainerEl
}

function plusBtn(){
    const plusBtn = renderGenericCartButton('plus')

    //events


    return plusBtn
}

export {render as renderCartItemQuantity}