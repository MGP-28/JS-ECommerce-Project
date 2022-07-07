import { addUnitToCart } from "../../../store/products";
import { renderPopup } from "../../generic/popup";

function addToCart(product) {

    const btnContainer = document.createElement('div');

    btnContainer.classList.add('cardAddToCart', 'border-solid', 'border-2', 'border-slate-900', 'place-self-center', 'w-full', 'hover:border-orange-300', 'hover:border-2', 'hover:shadow-md');

    btnContainer.innerHTML += `
        <button class="cardAddToCartBtn w-32">Add To Cart</button>
    `

    const btnEl = btnContainer.querySelector('button')
    btnEl.addEventListener('click', (e) => {
        addUnitToCart(product)
        renderPopup(true, 'Item added to cart')
    })

    return btnContainer;
};

export {addToCart};