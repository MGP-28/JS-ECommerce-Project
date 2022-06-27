export async function verifyCoupon(couponCode){

    const url = 'http://localhost:6868/couponcode?couponcode=' + couponCode

    const request = await fetch(url)
    const data = request.json()

    if(!data.couponcode){
        return data.message
    }

    return data.couponcode.discount

}