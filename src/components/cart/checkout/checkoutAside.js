import { renderCouponInsert } from "./couponForm"
import { renderCheckoutTotals } from "./totals"

export function render(parent){
   
    parent.append(renderCouponInsert())

    parent.append(renderCheckoutTotals())
}

export {render as renderCheckoutAside}