export function render(){
    let checkoutAsideEl = document.createElement('aside')
    checkoutAsideEl.classList.add('flex', 'flex-col', 'gap-10', 'text-sm')
    
    //

    return checkoutAsideEl
}

function renderCouponSection(){
    const couponSection = document.createElement('section')
    couponSection.classList.add('h-32', 'bg-white', 'rounded-md', 'p-5', 'flex', 'flex-col', 'pb-8')
    couponSection.setAttribute('id', 'cart-coupon')
}

export {render as renderCheckoutAside}