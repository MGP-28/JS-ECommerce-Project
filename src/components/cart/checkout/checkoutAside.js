import { renderCouponInsert } from "./couponForm"
import { renderCheckoutTotals } from "./totals"

export function render(){
    let checkoutAsideEl = document.createElement('aside')
    checkoutAsideEl.classList.add('flex', 'flex-col', 'gap-10', 'text-sm')
    
    checkoutAsideEl.append(renderCouponInsert())

    checkoutAsideEl.append(renderCheckoutTotals())

    return checkoutAsideEl
}



export {render as renderCheckoutAside}