import { addToCart } from "./addToCart.js";
import { rating } from "./rating.js";

function renderProductCard (product) {

    const productCardContainerEl = document.createElement("div");

    productCardContainerEl.classList.add('shop-grid-item', 'rounded-t-xl', 'overflow-hidden', 'mx-5');

    const productCardEl = document.createElement('div');
    
    productCardEl.classList.add('product-card');
    
    productCardContainerEl.append(productCardEl);

    const imgContainerEl = document.createElement('div');

    imgContainerEl.classList.add('h-64', 'bg-orange-500');

    productCardEl.append(imgContainerEl);

    const imgEl = document.createElement('img');

    imgEl.setAttribute('src', product.image);

    imgContainerEl.append(imgEl);

    imgContainerEl.append(rating(product));

    productCardEl.innerHTML += `
    <div class="px-8 py-6 product-card-text gap-5">
        <h4 class="cardName text-left">
          ${product.title}
        </h4>

        <h4 class="cardDescription place-self-center text-justify text-gray-500">
          ${product.description}
        </h4>

        <h4 class="cardPrice flex items-center leading-loose">
          ${product.price.toFixed(2)}
        </h4>

    </div>
    `
    productCardEl.querySelector('div.product-card-text').append(addToCart());

    return productCardContainerEl;
}

export {renderProductCard}