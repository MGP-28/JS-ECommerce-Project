export async function verifyCoupon(couponCode){

    const url = 'http://localhost:6868/couponcode?couponcode=' + couponCode

    const request = await fetch(url)
    const data = request.json()

    return (data.couponCode) ? {response: true, message: data.message, coupon: data.couponCode} : {response: false, message: data.message}

}