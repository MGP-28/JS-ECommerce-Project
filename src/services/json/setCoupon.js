import { verifyCoupon } from "../verifyCoupon";

export async function setCoupon(couponCode){

    const verifCouponResponse = await verifyCoupon(couponCode)

    if(!verifCouponResponse.response) couponCode = ""

    localStorage.setItem("couponCode", couponCode)

    return verifCouponResponse

}