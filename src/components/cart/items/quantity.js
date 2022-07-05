import { addUnitToCart, removeUnitFromCart } from "../../../store/products"
import { renderGenericCartButton } from "./generic/cartButton"

function render(cartItem){
    const cartItemQuantityEl = document.createElement('div')
    cartItemQuantityEl.classList.add('flex')

    cartItemQuantityEl.append(minusBtn(cartItem))
    cartItemQuantityEl.append(quantityDisplay(cartItem))
    cartItemQuantityEl.append(plusBtn(cartItem))

    return cartItemQuantityEl
}

function minusBtn(cartItem){
    const minusBtn = renderGenericCartButton('minus')

    //events
    minusBtn.addEventListener('click', () => {

        removeUnitFromCart(cartItem, false)

        document.dispatchEvent(new CustomEvent('cartChanged', {detail: false}))
    })

    return minusBtn
}

function quantityDisplay(cartItem){
    const quantityDisplayContainerEl = document.createElement('div')
    quantityDisplayContainerEl.classList.add('border-2', 'border-gray-300', 'rounded', 'shadow', 'w-10', 'h-10', 'flex', 'justify-center', 'items-center')
    const quantityDisplayEl = document.createElement('span')
    quantityDisplayEl.textContent = cartItem.quantity
    quantityDisplayContainerEl.append(quantityDisplayEl)

    //events
    document.addEventListener('cartChanged', ()=>{
        quantityDisplayEl.textContent = cartItem.quantity
    })

    return quantityDisplayContainerEl
}

function plusBtn(cartItem){
    const plusBtn = renderGenericCartButton('plus')

    //events
    plusBtn.addEventListener('click', () => {

        addUnitToCart(cartItem)

        document.dispatchEvent(new CustomEvent('cartChanged', {detail: false}))
    })

    return plusBtn
}

export {render as renderCartItemQuantity}