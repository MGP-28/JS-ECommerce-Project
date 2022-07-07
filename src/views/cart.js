import { renderCheckoutAside } from "../components/cart/checkout/checkoutAside"
import { renderCartList } from "../components/cart/items/cartItemList"
import { renderPopup } from "../components/generic/popup"

export function cart(){
    let cartView = document.querySelector('#cart')
    cartView.innerHTML = `
        <div class="w-full flex justify-center">
            <div class="flex flex-col justify-center w-full sm:w-3/4 my-10 sm:my-20">
                <h1 class="font-parisienne text-5xl font-extrabold sm:pl-5 text-center sm:text-left mb-5">Current shopping cart</h1>
                <div id="cart-empty-message" class="hidden mt-16 text-xl font-semibold text-center">You have no items in cart!</div>
                <div id="cart-list-grid" class="w-full grid gap-10">
                    <i class="fa-solid fa-spinner anim-spinner place-self-center h-16"></i>
                </div>
            </div>
        </div>
    `
    const pageContainerEl = cartView.querySelector('#cart-list-grid')
    eventListeners(cartView, pageContainerEl)
}

function eventListeners(cartView, pageContainerEl){
    cartView.addEventListener('couponError', (e) => {
        //popup(error, 'Error connecting')
        renderPopup(false,'Error connecting')
    })

    cartView.addEventListener('couponNotFound', (e) => {
        //popup(error, 'Coupon not valid')
        renderPopup(false,'Coupon not valid')
    })

    cartView.addEventListener('applyDiscount', (e) => {
        //popup(success, 'Coupon applied')
        renderPopup(true,'Coupon applied')
    })

    cartView.addEventListener('resetDiscount', (e) => {
        //popup(success, 'Coupon removed')
        renderPopup(true,'Coupon removed')
    })

    document.addEventListener('productsLoaded', (e) => {
        pageContainerEl.innerHTML = ''
        pageContainerEl.classList.add('cart-page-components-grid-cols')
        pageContainerEl.append(renderCartList())
        renderCheckoutAside(pageContainerEl)
    })

    document.addEventListener('cartEmpty', (e) => {
        cartView.querySelector('#cart-list-grid').classList.add('hidden')
        cartView.querySelector('#cart-empty-message').classList.remove('hidden')
        pageContainerEl.classList.add('hidden')
    })
}