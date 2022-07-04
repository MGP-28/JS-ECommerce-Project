import { renderItemCartDelete } from "./delete"
import { renderCartItemQuantity } from "./quantity"

function render(cartItem){

    const cartItemEl = document.createElement('li')

    const cartItemGridEl = document.createElement('div')
    cartItemGridEl.classList.add('grid', 'cart-item-row', 'gap-4', 'items-center', 'py-5')
    cartItemEl.append(cartItemGridEl)

    cartItemGridEl.append(renderImg(cartItem))

    cartItemGridEl.append(renderText(cartItem))
    
    cartItemGridEl.append(renderCartItemQuantity(cartItem, cartItemEl))

    cartItemGridEl.append(renderItemCartDelete(cartItem, cartItemEl))

    const dividerEl = document.createElement('div')
    dividerEl.classList.add('cart-item-divider', 'w-full', 'border-t')
    cartItemEl.append(dividerEl)

    //events
    cartItemEl.addEventListener('removeSelf', () => {
        cartItemEl.remove()
    })

    return cartItemEl
}

function renderImg(cartItem){
    const containerEl = document.createElement('div')
    containerEl.classList.add('bg-green-700', 'w-24', 'h-24', 'overflow-hidden')

    const imgEl = document.createElement('img')
    imgEl.setAttribute('src', cartItem.image)
    containerEl.append(imgEl)

    return containerEl
}

function renderText(cartItem){
    const containerEl = document.createElement('div')
    containerEl.classList.add('flex', 'flex-col', 'gap-3', 'overflow-hidden')

    const titleEl = document.createElement('h1')
    titleEl.textContent = cartItem.title
    containerEl.append(titleEl)

    const priceEl = document.createElement('h2')
    priceEl.classList.add('font-semibold')
    priceEl.textContent = (cartItem.price.toString().includes('.')) ? `$ ${cartItem.price}` : `$ ${cartItem.price}.00`
    containerEl.append(priceEl)

    return containerEl
}

export {render as renderCartItem}