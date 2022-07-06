import { shop } from "./shop.js";
import { about } from "./about.js";
import { contact } from "./contact.js";
import { cart } from "./cart.js";
import { renderNavBar } from "./master/nav.js";
import { renderFooter } from "./master/footer.js";
import { renderAppPages } from "./master/app.js";
import { renderProductList } from "../components/shop/products/productList.js";

export function buildUI(){
    renderNavBar()
    renderAppPages()
    renderFooter()
    shop()
    about()
    contact()
    cart()

    
}