function goToCart(){
    
    const shopBtn = document.createElement('button');

    shopBtn.classList.add('button', 'border', 'border-black', 'flex', 'items-center');

    shopBtn.setAttribute('id', 'shop-goToCart');

    shopBtn.textContent = 'Go to Cart';



    shopBtn.addEventListener('click',(e) => {
        const event = new CustomEvent('changeView', { 
            detail: { 
                view:'cart'
            } 
        });

        document.dispatchEvent(event);
    });


    //changes
    return shopBtn; 
}

export {goToCart}