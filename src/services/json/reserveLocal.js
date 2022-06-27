export function reserveLocalStorage(){

    //product data
    if(!localStorage.getItem("products")){
        const products = []
        localStorage.setItem("products", JSON.stringify(products));  
    }

    //coupon data
    if(!localStorage.getItem("couponCode")){
        const couponCode = ''
        localStorage.setItem("couponCode", couponCode);
    }
}