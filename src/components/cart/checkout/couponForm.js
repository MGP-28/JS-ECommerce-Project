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
    couponFormEl.innerHTML += `
        <input required type="text" name="coupon" placeholder="Text" class="px-2 text-sm outline outline-3 outline-gray-300 rounded-sm h-9 w-3/4">
    `
    const couponFormButton = document.createElement('button')
    couponFormButton.classList.add('w-1/4', 'border', 'border-black', 'background-beige', 'shadow', 'font-parisienne', 'hover:border-orange-300', 'hover:border-2', 'hover:shadow-md')
    couponFormButton.textContent = 'Apply'

    couponFormEl.append(couponFormButton)
    
    couponFormEl.addEventListener('submit', (e) => {
        e.preventDefault()
        const couponCode = e.target.coupon.value
        
        //API stuff

    })

    return couponFormEl
}


export {render as renderCouponInsert}