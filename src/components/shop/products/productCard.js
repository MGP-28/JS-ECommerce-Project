import { addToCart } from "./addToCart.js";
import { rating } from "./rating.js";

function renderProductCard (product) {

    const productCardContainerEl = document.createElement("div");

    productCardContainerEl.classList.add('shop-grid-item', 'rounded-t-xl', 'overflow-hidden', 'mx-5');

    const productCardEl = document.createElement('div');
    
    productCardEl.classList.add('product-card');
    
    productCardContainerEl.append(productCardEl);

    const imgContainerEl = document.createElement('div');

    imgContainerEl.classList.add('h-64', 'bg-white', 'overflow-hidden', 'relative');

    productCardEl.append(imgContainerEl);

    const imgEl = document.createElement('img');

    imgEl.setAttribute('src', product.image);

    imgEl.addEventListener('load', (e)=>{
      if(e.target.width > e.target.height) imgEl.classList.add('place-self-center')
    })

    imgContainerEl.append(imgEl);

    imgContainerEl.append(rating(product));

    //console.log(product.price.toFixed(2))

    productCardEl.innerHTML += `
    <div class="px-8 py-6 product-card-text gap-5">
        <h4 class="cardName text-left">
          ${product.title}
        </h4>

        <h4 class="cardDescription place-self-center text-justify text-gray-500">
          ${product.description}
        </h4>

        <h4 class="cardPrice flex items-center leading-loose">
          $${product.price}
        </h4>

    </div>
    `
    productCardEl.querySelector('div.product-card-text').append(addToCart());

    return productCardContainerEl;
}

export {renderProductCard}