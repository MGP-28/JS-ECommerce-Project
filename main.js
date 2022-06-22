import { getProducts } from './src/services/getProducts.js'

import "@fontsource/parisienne";
import "@fontsource/roboto";

import "@fortawesome/fontawesome-free/js/all.js"

import './src/input.css'

import { buildUI } from './src/views/buildUI.js';

buildUI()

/*const app = document.querySelector('#app')
const children = [...app.children]
console.log(children)
children.forEach(element => {
  (element.id == 'about') 
    ? element.classList.remove('hidden')
    : element.classList.add('hidden')
});*/
