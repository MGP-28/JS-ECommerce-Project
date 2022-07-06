function goToCart(){
    
    const shopBtn = document.createElement('btn');

    shopBtn.classList.add('button', 'border', 'border-black', 'flex', 'items-center');

    shopBtn.setAttribute('id', 'shop-goToCart');

    shopBtn.textContent = 'Go to Cart';



    // shopBtn.addEventListener('click',(e) => {
    //     e = new CustomEvent('changeView', { 
    //         detail: { 
    //             view:'cart'
    //         } 
    //     });

    //     document.dispatchEvent(e);

    // });



    //changes
    return shopBtn; 
}

export {goToCart}