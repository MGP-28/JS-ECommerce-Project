import { verifyCoupon } from "../verifyCoupon";

export async function setCoupon(code){

    const verifCouponResult = await verifyCoupon()

    if(verifCouponResult == NaN) code = ""

    localStorage.setItem("couponCode", code)
    return verifCouponResult

}