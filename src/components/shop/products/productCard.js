import { rating } from "./rating.js";

export function renderProductCard () {

    const productCardContainerEl = document.createElement("div");

    productCardContainerEl.classList.add('shop-grid-item', 'rounded-t-xl', 'overflow-hidden', 'mx-5');

    const productCardEl = document.createElement('div');
    
    productCardEl.classList.add('product-card');
    
    productCardContainerEl.append(productCardEl);

    const imgContainerEl = document.createElement('div');

    imgContainerEl.classList.add('h-64', 'bg-orange-500');

    productCardEl.append(imgContainerEl);

    const imgEl = document.createElement('img');

    imgContainerEl.append(imgEl);

    imgContainerEl.append(rating());

    productCardEl.innerHTML += `
    <div class="px-8 py-6 product-card-text gap-5">
    <h4 class="cardName text-left">
      Men´s black Tie Valentino
    </h4>

    <h4 class="cardDescription place-self-center text-justify text-gray-500">
      The fedora hat is reimagined for Pre-Fall 2020 with a maxi embroided label de Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint accusantium iure tempore beatae enim recusandae laboriosam cum dolores aliquam voluptatem consequuntur totam facilis iusto, rerum, sed similique maxime ullam quidem.
    </h4>

    <h4 class="cardPrice flex items-center leading-loose">
      $225
    </h4>

    <div class="cardAddToCart border-solid border-2 border-slate-900 place-self-center w-full">
      <button class="cardAddToCartBtn w-32">Add To Cart</button>
    </div>
  </div>
    `

    return productCardContainerEl;
}