import { store } from "./store.js";
import { about } from "./about.js";
import { contact } from "./contact.js";
import { cart } from "./cart.js";

export function buildUI(){
    store()
    about()
    contact()
    cart()
}