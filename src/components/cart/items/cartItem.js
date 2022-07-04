import { renderItemCartDelete } from "./delete"
import { renderCartItemQuantity } from "./quantity"

function render(cartItem){

    const cartItemEl = document.createElement('li')

    const cartItemGridEl = document.createElement('div')
    cartItemGridEl.classList.add('grid', 'cart-item-row', 'gap-4', 'items-center', 'py-5')
    cartItemEl.append(cartItemGridEl)

    cartItemGridEl.append(renderImg(cartItem))

    cartItemGridEl.append(renderText(cartItem))

    const buttonsContainerEl = document.createElement('div')
    buttonsContainerEl.classList.add('cart-item-buttons', 'flex', 'gap-4')
    buttonsContainerEl.append(renderCartItemQuantity(cartItem))
    buttonsContainerEl.append(renderItemCartDelete(cartItem, cartItemEl))
    cartItemGridEl.append(buttonsContainerEl)

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
    containerEl.classList.add('cart-item-image', 'w-24', 'h-24', 'overflow-hidden', 'grid')

    const imgEl = document.createElement('img')
    imgEl.setAttribute('src', cartItem.image)
    containerEl.append(imgEl)
    
    imgEl.addEventListener('load', (e)=>{
        if(e.target.width > e.target.height) imgEl.classList.add('place-self-center')
    })

    return containerEl
}

function renderText(cartItem){
    const containerEl = document.createElement('div')
    containerEl.classList.add('cart-item-text', 'flex', 'flex-col', 'gap-3', 'overflow-hidden')

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