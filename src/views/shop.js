import { renderProductList } from "../components/shop/products/productList";
import { renderTopRow } from "../components/shop/topRow/topRow";

export function shop(){

    const shopContainerEl = document.createElement("div");

    shopContainerEl.classList.add('sm:px-16', 'py-10', 'flex', 'flex-col', 'gap-10');
    
    shopContainerEl.append(renderTopRow());

    //shopContainerEl.append()

    document.addEventListener('productsLoaded', (e) => {
        shopContainerEl.append(renderProductList());
    })
    
    shopContainerEl.append(renderProductList());
    
    document.querySelector('#shop').append(shopContainerEl);
}