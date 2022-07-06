import { getStoredCoupon, setStoredCoupon } from "../../../store/products"

export function render(){
    let couponInsertEl = document.createElement('section')
    couponInsertEl.classList.add('h-32', 'bg-white', 'rounded-md', 'p-5', 'flex', 'flex-col', 'justify-between', 'pb-8')
    couponInsertEl.setAttribute('id', 'cart-coupon')

    //build title
    let couponTextEl = document.createElement('h3')
    couponTextEl.textContent = 'Have a coupon?'
    couponInsertEl.append(couponTextEl)

    //build form
    couponInsertEl.append(couponForm())

    return couponInsertEl
}

function couponForm(){
    //form
    const couponFormEl = document.createElement('form')
    couponFormEl.classList.add('flex', 'gap-5')

    //text input
    couponFormEl.innerHTML += `
        <input type="text" name="coupon" placeholder="Text" class="px-2 text-sm outline outline-3 outline-gray-300 rounded-sm h-9 w-3/4">
    `
    const couponFormInput = couponFormEl.querySelector('input')
    couponFormInput.addEventListener('focus', (e) => {
        couponFormInput.value = ''
        couponFormInput.classList.remove('anim-input-error', 'font-bold', 'text-red-500', 'border', 'border-yellow-600')
    })
    
    //submit button
    const couponFormButton = document.createElement('button')
    couponFormButton.classList.add('w-1/4', 'border', 'border-black', 'background-beige', 'shadow', 'font-parisienne', 'hover:border-orange-300', 'hover:border-2', 'hover:shadow-md')
    couponFormButton.textContent = 'Apply'

    couponFormEl.append(couponFormButton)

    //event listeners within the form
    const cartView = document.querySelector('#cart')
    cartView.addEventListener('couponError', (e) => {
        resetForm(couponFormInput, couponFormButton, true)
    })

    cartView.addEventListener('couponNotFound', (e) => {
        resetForm(couponFormInput, couponFormButton, true)
    })

    cartView.addEventListener('applyDiscount', (e) => {
        resetForm(couponFormInput, couponFormButton, false)
    })
    cartView.addEventListener('resetDiscount', (e) => {
        resetForm(couponFormInput, couponFormButton, false)
    })
    
    //form events
    couponFormEl.addEventListener('submit', (e) => {
        e.preventDefault()

        //changes to elements while searching (locked)
        couponFormButton.innerHTML = `<i class="fa-solid fa-spinner anim-spinner place-self-center"></i>`
        couponFormInput.setAttribute('disabled', '')

        const couponCodeInserted = e.target.coupon.value
        setStoredCoupon(couponCodeInserted)
    })

    return couponFormEl
}

function resetForm(couponFormInput, couponFormButton, isError){
    couponFormButton.innerHTML = `Apply`
    couponFormInput.removeAttribute('disabled')
    if(isError) couponFormInput.classList.add('anim-input-error')
}

export {render as renderCouponInsert}