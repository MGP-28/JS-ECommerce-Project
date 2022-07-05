import { getStoredCoupon, getStoredTotals, resetPurchases } from "../store/products";
import { getCartItems } from "./json/getCartItems";

async function sendPurchase(){
    
    const purchaseJSON = buildJSON()

    const response = await sendData(purchaseJSON)
    if(response){
        document.dispatchEvent(new Event('purchaseSuccessful'))
        resetPurchases()
    }
    else document.dispatchEvent(new Event('purchaseFailed'))
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
            }).then(() => {
                retries = -1
            });
        }catch(error){
            retries--
            console.log(error)
            console.log(`error -> retries left: ${retries}`)
        }
    }

    return (retries >= 0) 
        ? false
        : true
}

export {sendPurchase}