import { renderProductCard } from "./productCard";

function renderProductList() {

    const productListContainerEl = document.createElement('div');

    productListContainerEl.classList.add('flex', 'justify-center');

    const productListEl = document.createElement('div');

    productListEl.classList.add('shop-grid-container', 'flex', 'flex-wrap', 'gap-10', 'justify-center');

    productListEl.append(renderProductCard());

    productListContainerEl.append(productListEl);

    return productListContainerEl;
}

export {renderProductList};