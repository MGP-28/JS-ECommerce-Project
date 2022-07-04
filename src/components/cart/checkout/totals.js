export function render(){
    let checkoutTotalsEl = document.createElement('section')
    checkoutTotalsEl.classList.add('bg-white', 'rounded-md', 'p-5', 'flex', 'flex-col', 'gap-3')
    checkoutTotalsEl.setAttribute('id', 'cart-totals')
    checkoutTotalsEl.innerHTML = `
        <div class="flex justify-between">
            <h3>Total Price:</h3>
            <h3>$69.97</h3>
        </div>
        <div id="cart-totals-discount" class="flex flex-col gap-3">
            <div class="flex justify-between">
            <h3>Discount:</h3>
            <h3 class="text-red-500">- $10.00</h3>
            </div>
            <div class="flex justify-between">
            <h3>Total:</h3>
            <h3 class="font-bold">$59.97</h3>
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

export {render as renderCheckoutTotals}