import { renderProductList } from "../components/shop/products/productList";


export function shop(){
    document.querySelector('#shop').append(renderProductList());
    
}