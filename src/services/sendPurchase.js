import { getStoredCoupon, getStoredTotals, resetPurchases } from "../store/products";
import { getCartItems } from "./json/getCartItems";

async function sendPurchase(){
    
    const purchaseJSON = buildJSON()

    const response = await sendData(purchaseJSON)
    if(response){
        document.dispatchEvent(new Event('purchaseSuccessful'))
        resetPurchases()
        return response
    }
    document.dispatchEvent(new Event('purchaseFailed'))
    return response
}

function buildJSON(){

    const {subtotal} = getStoredTotals()
    const couponcode = getStoredCoupon()
    const cartItems = getCartItems()

    //rebuilds cartItems into only their IDs and Quantity
    let productsToPurchase = []
    cartItems.forEach(product => {
        const {id, quantity} = product
        productsToPurchase.push({id: id, quantity: quantity})
    });

    return JSON.stringify({
        couponcode: couponcode,
        amount: subtotal,
        products: productsToPurchase
    })
}

async function sendData(json){
    let retries = 5
    let successMessage = ''
    let isSuccessfull = false

    while(retries > 0){
        try{
            await fetch('http://localhost:6868/pay', {
                method: "POST",
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Accept': '*/*',
                    'User-Agent': 'DekiDeki',
                    'Content-Type': 'application/json'
                }, 
                body: json
            })
            //check response status code
            .then(response => {
                if(response.status === 201) isSuccessfull = true
                return response
            })
            //unpack data from response
            .then(response => response.json())
            //check returned message from API
            .then((data) => {
                if(isSuccessfull) {
                    successMessage = data.message;
                    retries = -1
                }
                else retries = 0
            });
        }catch(error){
            retries--
            console.log(error)
            console.log(`error -> retries left: ${retries}`)
        }
    }

    return (successMessage) 
        ? successMessage
        : false
}

export {sendPurchase}