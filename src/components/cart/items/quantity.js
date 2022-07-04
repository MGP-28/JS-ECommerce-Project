import { addUnitToCart, removeUnitFromCart } from "../../../store/products"
import { renderGenericCartButton } from "./generic/cartButton"

function render(cartItem, parent){
    const cartItemQuantityEl = document.createElement('div')
    cartItemQuantityEl.classList.add('flex')

    cartItemQuantityEl.append(minusBtn(cartItem, parent))
    cartItemQuantityEl.append(quantityDisplay(cartItem, parent))
    cartItemQuantityEl.append(plusBtn(cartItem, parent))

    return cartItemQuantityEl
}

function minusBtn(cartItem, parent){
    const minusBtn = renderGenericCartButton('minus')

    //events
    minusBtn.addEventListener('click', () => {

        const hasChanged = removeUnitFromCart(cartItem, false)
        if(hasChanged) parent.dispatchEvent(new Event('itemQuantityChanged'))
    })

    return minusBtn
}

function quantityDisplay(cartItem, parent){
    const quantityDisplayContainerEl = document.createElement('div')
    quantityDisplayContainerEl.classList.add('border-2', 'border-gray-300', 'rounded', 'shadow', 'w-10', 'h-10', 'flex', 'justify-center', 'items-center')
    const quantityDisplayEl = document.createElement('span')
    quantityDisplayEl.textContent = cartItem.quantity
    quantityDisplayContainerEl.append(quantityDisplayEl)

    //events
    parent.addEventListener('itemQuantityChanged', ()=>{
        quantityDisplayEl.textContent = cartItem.quantity
    })

    return quantityDisplayContainerEl
}

function plusBtn(cartItem, parent){
    const plusBtn = renderGenericCartButton('plus')

    //events
    plusBtn.addEventListener('click', () => {

        addUnitToCart(cartItem)

        parent.dispatchEvent(new Event('itemQuantityChanged'))
    })

    return plusBtn
}

export {render as renderCartItemQuantity}