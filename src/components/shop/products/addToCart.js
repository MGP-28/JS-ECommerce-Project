
function addToCart() {

    const btnContainer = document.createElement('div');

    btnContainer.classList.add('cardAddToCart', 'border-solid', 'border-2', 'border-slate-900', 'place-self-center', 'w-full');

    btnContainer.innerHTML += `
        <button class="cardAddToCartBtn w-32">Add To Cart</button>
    `

    return btnContainer;
};

export {addToCart};