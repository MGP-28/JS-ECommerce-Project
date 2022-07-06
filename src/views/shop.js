import { renderSpinner } from "../components/generic/spinner";
import { renderProductList } from "../components/shop/products/productList";
import { renderTopRow } from "../components/shop/topRow/topRow";

export function shop(){

    const shopContainerEl = document.createElement("div");

    shopContainerEl.classList.add('sm:px-16', 'py-10', 'flex', 'flex-col', 'gap-10');

    const shop = document.querySelector('#shop')
    shop.append(shopContainerEl);
    
    shopContainerEl.append(renderTopRow());

    const spinner = renderSpinner()
    spinner.classList.add('h-20')
    shopContainerEl.append(spinner);

    //shopContainerEl.append()

    document.addEventListener('productsLoaded', (e) => {
        //remove spinner content
        const spinnerEls = shopContainerEl.querySelectorAll(':scope>:not(div)') //look into the first layer into shop container and get anything that's not a Div (svg, i, ...)
        spinnerEls.forEach(element => element.remove())
        //render product list
        shopContainerEl.append(renderProductList());
    })
    
}