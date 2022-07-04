import { getStoredCartItems, getStoredDiscount } from "../../../store/products"

export function render(){
    let checkoutTotalsEl = document.createElement('section')
    checkoutTotalsEl.classList.add('bg-white', 'rounded-md', 'p-5', 'flex', 'flex-col', 'gap-3')
    checkoutTotalsEl.setAttribute('id', 'cart-totals')
    checkoutTotalsEl.innerHTML = `
        <div class="flex justify-between">
            <h3>Total Price:</h3>
            <h3>$ ${getTotals()}</h3>
        </div>
        <div id="cart-totals-discount" class="flex flex-col gap-3 hidden">
            <div class="flex justify-between">
            <h3>Discount:</h3>
            <h3 class="text-red-500">- $<span id="cart-savings"></span></h3>
            </div>
            <div class="flex justify-between">
            <h3>Total:</h3>
            <h3 class="font-bold">$<span id="cart-final-price"></span></h3>
            </div>
        </div>
        <div id="checkout-btn-container" class="w-full">
        </div>
        <div class="flex justify-center gap-2">
            <div class="border rounded shadow-sm px-2 hover:border-orange-300 hover:border hover:shadow-md">
                <img class="w-6" src="https://img.icons8.com/color/48/000000/mastercard-logo.png"/>
            </div>
            <div class="border rounded shadow-sm px-2 hover:border-orange-300 hover:border hover:shadow-md">
                <img class="w-6" src="https://img.icons8.com/fluency/48/000000/paypal.png"/>
            </div>
            <div class="border rounded shadow-sm px-2 hover:border-orange-300 hover:border hover:shadow-md">
                <img class="w-6" src="./src/assets/img/visa.png"/>
            </div>
            <div class="border rounded shadow-sm px-2 hover:border-orange-300 hover:border hover:shadow-md">
                <img class="w-6" src="./src/assets/img/american-express.png"/>
            </div>
        </div>
    `

    checkoutTotalsEl.querySelector('#checkout-btn-container').append(purchaseButton())

    const discountTab = checkoutTotalsEl.querySelector('#cart-totals-discount')
    const cartView = document.querySelector('#cart')
    cartView.addEventListener('couponError', (e) => {
        toggleDiscountTab(discountTab, false)
    })

    cartView.addEventListener('couponNotFound', (e) => {
        toggleDiscountTab(discountTab, false)
    })

    cartView.addEventListener('applyDiscount', (e) => {
        toggleDiscountTab(discountTab, true)
        applyDiscount(checkoutTotalsEl)
    })

    cartView.addEventListener('resetDiscount', (e) => {
        toggleDiscountTab(discountTab, false)
    })

    checkForDiscountApplied(checkoutTotalsEl, discountTab)

    return checkoutTotalsEl
}


function purchaseButton(){
    const confirmPurchaseEl = document.createElement('button')
    confirmPurchaseEl.classList.add('border', 'border-black', 'background-beige', 'shadow', 'font-parisienne', 'hover:border-orange-300', 'hover:border-2', 'hover:shadow-md', 'h-12', 'text-2xl', 'my-3', 'w-full')
    confirmPurchaseEl.textContent = 'Make Purchase'
    confirmPurchaseEl.addEventListener('click', (e) => {
        //API stuff
    })

    return confirmPurchaseEl
}

function getTotals(){
    const cartItems = getStoredCartItems()
    const baseSum = cartItems.reduce((sum, product) => {
        return sum + (product.price * product.quantity)
    },0);
    return baseSum
}

function toggleDiscountTab(discountTab, isShown){
    (isShown) ? discountTab.classList.remove('hidden') : discountTab.classList.add('hidden')
}

function applyDiscount(checkoutTotalsEl){
    const sum = getTotals()
    const discount = getStoredDiscount()
    checkoutTotalsEl.querySelector('#cart-savings').textContent = Math.round((sum * (discount/100) + Number.EPSILON) * 100) / 100
    checkoutTotalsEl.querySelector('#cart-final-price').textContent = Math.round((sum - (sum * (discount/100)) + Number.EPSILON) * 100) / 100
}

function checkForDiscountApplied(checkoutTotalsEl, discountTab){
    if(getStoredDiscount()) {
        toggleDiscountTab(discountTab, true)
        applyDiscount(checkoutTotalsEl)
    }
}

export {render as renderCheckoutTotals}