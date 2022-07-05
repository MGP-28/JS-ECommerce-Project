export function reserveLocalStorage(){

    //product data
    if(!localStorage.getItem("products")){
        const products = []
        localStorage.setItem("products", JSON.stringify(products));  
    }

    //coupon data
    if(!localStorage.getItem("coupon")){
        const coupon = {code: '', discount: ''}
        localStorage.setItem("coupon", JSON.stringify(coupon));
    }
}