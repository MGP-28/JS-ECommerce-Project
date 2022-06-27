import { shop } from "./shop.js";
import { about } from "./about.js";
import { contact } from "./contact.js";
import { cart } from "./cart.js";

export function buildUI(){
    shop()
    about()
    contact()
    cart()
}