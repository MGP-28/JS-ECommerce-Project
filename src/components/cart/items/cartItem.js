import { renderItemCartDelete } from "./delete"
import { renderCartItemQuantity } from "./quantity"

function render(product){
    const cartItemEl = document.createElement('li')

    const cartItemGridEl = document.createElement('div')
    cartItemGridEl.classList.add('grid', 'cart-item-row', 'gap-4', 'items-center', 'py-5')
    cartItemEl.append(cartItemGridEl)

    cartItemGridEl.append(renderImg())

    cartItemGridEl.append(renderText())
    
    cartItemGridEl.append(renderCartItemQuantity())

    cartItemGridEl.append(renderItemCartDelete())

    const dividerEl = document.createElement('div')
    dividerEl.classList.add('cart-item-divider', 'w-full', 'border-t')
    cartItemEl.append(dividerEl)

    //events
    

    

    return cartItemEl
}

function renderImg(imgURL){
    const containerEl = document.createElement('div')
    containerEl.classList.add('bg-green-700', 'w-24', 'h-24', 'overflow-hidden')

    const imgEl = document.createElement('img')
    //imgEl.setAttribute('src', imgURL)
    containerEl.append(imgEl)

    return containerEl
}

function renderText(name, price){
    const containerEl = document.createElement('div')
    containerEl.classList.add('flex', 'flex-col', 'gap-3', 'overflow-hidden')

    const nameEl = document.createElement('h1')
    //text content
    containerEl.append(nameEl)

    const priceEl = document.createElement('h2')
    priceEl.classList.add('font-semibold')
    //text content
    containerEl.append(priceEl)

    return containerEl
}

export {render as renderCartItem}