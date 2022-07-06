function goToCart(){
    
    const shopBtn = document.createElement('button');

    shopBtn.classList.add('button', 'border', 'border-black', 'flex', 'items-center');

    shopBtn.setAttribute('id', 'shop-goToCart');

    shopBtn.textContent = 'Go to Cart';



    //changes
    return shopBtn; 
}

export {goToCart}