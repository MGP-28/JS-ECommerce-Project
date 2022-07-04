import { getStoredCoupon, setStoredCoupon } from "../../../store/products"

export function render(){
    let couponInsertEl = document.createElement('section')
    couponInsertEl.classList.add('h-32', 'bg-white', 'rounded-md', 'p-5', 'flex', 'flex-col', 'justify-between', 'pb-8')
    couponInsertEl.setAttribute('id', 'cart-coupon')

    let couponTextEl = document.createElement('h3')
    couponTextEl.textContent = 'Have a coupon?'
    couponInsertEl.append(couponTextEl)

    couponInsertEl.append(couponForm())

    return couponInsertEl
}

function couponForm(){
    const couponFormEl = document.createElement('form')
    couponFormEl.classList.add('flex', 'gap-5')

    //text input
    couponFormEl.innerHTML += `
        <input required type="text" name="coupon" placeholder="Text" class="px-2 text-sm outline outline-3 outline-gray-300 rounded-sm h-9 w-3/4">
    `
    const couponFormInput = couponFormEl.querySelector('input')
    if(getStoredCoupon()) insertActiveCouponCode(couponFormInput)

    couponFormInput.addEventListener('focus', (e) => {
        couponFormInput.value = ''
        couponFormInput.classList.remove('bg-gray-300', 'border-2', 'border-green-600', 'anim-input-error', 'font-bold', 'text-red-500')
    })
    couponFormInput.addEventListener('blur', (e) => {
        if(getStoredCoupon()){
            insertActiveCouponCode(couponFormInput)
        }
    })
    const cartView = document.querySelector('#cart')
    cartView.addEventListener('couponError', (e) => {
        couponFormInput.value = ''
    })

    cartView.addEventListener('couponNotFound', (e) => {
        couponFormInput.classList.add('anim-input-error', 'font-bold', 'text-red-500')
    })

    cartView.addEventListener('applyDiscount', (e) => {
        addCouponSuccessClasses(couponFormInput)
    })
    
    //form submit button
    const couponFormButton = document.createElement('button')
    couponFormButton.classList.add('w-1/4', 'border', 'border-black', 'background-beige', 'shadow', 'font-parisienne', 'hover:border-orange-300', 'hover:border-2', 'hover:shadow-md')
    couponFormButton.textContent = 'Apply'

    couponFormEl.append(couponFormButton)
    
    //form events
    couponFormEl.addEventListener('submit', (e) => {
        e.preventDefault()

        const couponCodeInserted = e.target.coupon.value
        setStoredCoupon(couponCodeInserted)
    })

    return couponFormEl
}

function addCouponSuccessClasses(couponFormInput){
    couponFormInput.classList.add('bg-gray-300', 'border-2', 'border-green-600')
}

function insertActiveCouponCode(couponFormInput){
    const couponCode = getStoredCoupon()
    couponFormInput.value = couponCode
    addCouponSuccessClasses(couponFormInput)
}


export {render as renderCouponInsert}