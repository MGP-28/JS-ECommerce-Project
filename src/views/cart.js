import { renderCheckoutAside } from "../components/cart/checkout/checkoutAside"
import { renderCartList } from "../components/cart/items/cartItemList"

export function cart(){
    let cartPage = document.querySelector('#cart')
    cartPage.innerHTML = `
        <div class="w-full flex justify-center">
            <div class="flex flex-col justify-center w-3/4 my-20">
                <h1 class="font-parisienne text-5xl font-extrabold pl-5 mb-5">Current shopping cart</h1>
                <div id="cart-list-grid" class="w-full grid gap-10 grid-cols-2 cart-page-components-grid-cols">
                </div>
            </div>
        </div>
    `
    const pageContainerEl = cartPage.querySelector('#cart-list-grid')
    pageContainerEl.append(renderCartList())
    pageContainerEl.append(renderCheckoutAside())
}

function eventListeners(){
    cartView.addEventListener('couponError', (e) => {
        //popup(error, e.detail.error)
    })
}

export function applyDiscount(couponDiscount){
    const event = new CustomEvent('applyDiscount', {
        detail:{
            discount: couponDiscount
        }
    })
    cartView.dispatchEvent(event)
}

export function couponError(couponError){
    
    const event = new CustomEvent('couponError', {
        detail:{
            error: couponError
        }
    })
    cartView.dispatchEvent(event)
}