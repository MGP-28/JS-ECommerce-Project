export async function verifyCoupon(couponCode){

    let retries = 20

    const url = 'http://localhost:6868/couponcode?couponcode=' + couponCode

    while(retries > 0){
        try{
            const request = await fetch(url)
            const data = await request.json()

            return await (data.couponcode) ? {response: true, message: data.message, coupon: data.couponcode} : {response: false, message: data.message}
        } catch (error){
            retries--
            console.log(`error -> retries left: ${retries}`)
        }    
    }
    
    return false

}