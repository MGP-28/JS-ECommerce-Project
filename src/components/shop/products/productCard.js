import { addToCart } from "./addToCart.js";
import { rating } from "./rating.js";

function renderProductCard (product) {

    const productCardContainerEl = document.createElement("div");
    productCardContainerEl.classList.add('shop-grid-item', 'rounded-t-xl', 'overflow-hidden', 'mx-5', 'relative');

    const productCardEl = document.createElement('div');
    productCardEl.classList.add('product-card');
    productCardContainerEl.append(productCardEl);
    productCardContainerEl.append(rating(product));

    const imgContainerEl = document.createElement('div');
    imgContainerEl.classList.add('h-64', 'bg-white', 'overflow-hidden');
    productCardEl.append(imgContainerEl);

    const imgEl = document.createElement('img');
    imgEl.setAttribute('src', product.image);
    imgEl.addEventListener('load', (e)=>{
      if(e.target.width > e.target.height) imgEl.classList.add('place-self-center')
    })

    imgContainerEl.append(imgEl);

    productCardEl.innerHTML += `
    <div class="px-8 py-6 product-card-text gap-5">
        <h4 class="cardName text-left">
          ${product.title}
        </h4>

        <h4 class="cardDescription place-self-center text-justify text-gray-500">
          ${product.description}
        </h4>

        <h4 class="cardPrice flex items-center leading-loose">
          $${parseFloat(product.price).toFixed(2)}
        </h4>

    </div>
    `
    productCardEl.querySelector('div.product-card-text').append(addToCart(product));

    const shop = document.querySelector('#shop')

    shop.addEventListener('search', (e) => {
      const searchTerm = e.detail.searchTerm

      if (product.title.toLowerCase().includes(searchTerm)) productCardEl.classList.remove('hidden')
      else productCardEl.classList.add('hidden')
    })

    shop.addEventListener('resetSearch', (e) => {
      productCardEl.classList.remove('hidden')
    })

    return productCardContainerEl;
}

export {renderProductCard}