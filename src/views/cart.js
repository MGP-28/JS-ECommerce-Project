import { renderCheckoutAside } from "../components/cart/checkout/checkoutAside"
import { renderCartList } from "../components/cart/items/cartItemList"

export function cart(){
    let cartView = document.querySelector('#cart')
    cartView.innerHTML = `
        <div class="w-full flex justify-center">
            <div class="flex flex-col justify-center w-3/4 my-20">
                <h1 class="font-parisienne text-5xl font-extrabold pl-5 mb-5">Current shopping cart</h1>
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
    })

    cartView.addEventListener('couponNotFound', (e) => {
        //popup(error, 'Coupon not valid')
    })

    cartView.addEventListener('applyDiscount', (e) => {
        //popup(success, 'Coupon applied') ???
    })

    document.addEventListener('productsLoaded', (e) => {
        pageContainerEl.innerHTML = ''
        pageContainerEl.classList.add('cart-page-components-grid-cols')
        pageContainerEl.append(renderCartList())
        renderCheckoutAside(pageContainerEl)
    })
}