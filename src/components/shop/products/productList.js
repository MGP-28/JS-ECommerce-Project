import { getStoredProducts } from "../../../store/products";
import { renderProductCard } from "./productCard";

function renderProductList() {

    const productListContainerEl = document.createElement('div');

    productListContainerEl.classList.add('flex', 'justify-center');

    const productListEl = document.createElement('div');

    productListEl.classList.add('shop-grid-container', 'flex', 'flex-wrap', 'gap-10', 'justify-center');

    const products = getStoredProducts();

    products.forEach((product) => {
        productListEl.append(renderProductCard(product));
    });

    productListContainerEl.append(productListEl);


    return productListContainerEl;
}

export {renderProductList};