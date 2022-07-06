import { renderSpinner } from "../components/generic/spinner";
import { renderProductList } from "../components/shop/products/productList";
import { renderTopRow } from "../components/shop/topRow/topRow";

export function shop(){

    const shopContainerEl = document.createElement("div");

    shopContainerEl.classList.add('sm:px-16', 'py-10', 'flex', 'flex-col', 'gap-10');

    document.querySelector('#shop').append(shopContainerEl);
    
    shopContainerEl.append(renderTopRow());

    shopContainerEl.append(renderSpinner());

    //shopContainerEl.append()

    document.addEventListener('productsLoaded', (e) => {
        //remove spinner
        shopContainerEl.append(renderProductList());
    })
    
}