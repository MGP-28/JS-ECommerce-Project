import { verifyCoupon } from "../verifyCoupon";

export async function setCoupon(code){

    const verifCouponResponse = await verifyCoupon()

    if(!verifCouponResponse.response) code = ""

    localStorage.setItem("couponCode", code)

    return verifCouponResponse

}