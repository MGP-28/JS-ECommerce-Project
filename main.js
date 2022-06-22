import "@fontsource/parisienne";
import "@fontsource/roboto";

import "@fortawesome/fontawesome-free/js/all.js"

import './src/input.css'

import { load } from "./src/services/load.js";

import { buildUI } from './src/views/buildUI.js';

load()

buildUI()

/*const app = document.querySelector('#app')
const children = [...app.children]
console.log(children)
children.forEach(element => {
  (element.id == 'about') 
    ? element.classList.remove('hidden')
    : element.classList.add('hidden')
});*/
