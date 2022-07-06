import "@fontsource/parisienne";
import "@fontsource/roboto";

import "@fortawesome/fontawesome-free/js/all.js"
import { renderProductList } from "./src/components/shop/products/productList";

import './src/input.css'

import { load } from "./src/load.js";
import { sendContact } from "./src/services/sendContact";

sendContact({name:'joao', email: 'joao@gmail.com', message: 'estica-me'})

load()



