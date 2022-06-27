const cartView = document.getElementById("#cart") 

export function cart(){
    //build
}

function eventListeners(){
    cartView.addEventListener('couponError', (e) => {
        //popup(error, e.detail.error)
    })
}

export function applyDiscount(couponDiscount){
    const event = new CustomEvent('applyDiscount', {
        detail:{
            discount: couponDiscount
        }
    })
    cartView.dispatchEvent(event)
}

export function couponError(couponError){
    
    const event = new CustomEvent('couponError', {
        detail:{
            error: couponError
        }
    })
    cartView.dispatchEvent(event)
}