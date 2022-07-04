import { verifyCoupon } from "../verifyCoupon";

export async function setCoupon(couponCode){

    if(!couponCode) {resetCoupon(); return}

    const verifCouponResponse = await verifyCoupon(couponCode)

    if(!verifCouponResponse.response) resetCoupon()

    else localStorage.setItem("coupon", JSON.stringify({code: verifCouponResponse.coupon.code, discount: verifCouponResponse.coupon.discount}))

    return verifCouponResponse

}

function resetCoupon(){
    localStorage.setItem("coupon", JSON.stringify({code:'',discount:''}))
}