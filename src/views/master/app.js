import { renderPopup } from "../../components/generic/popup"

function render(){
    document.querySelector('#app').innerHTML += `
    <div id="shop"></div>
    <div id="about" class="hidden"></div>
    <div id="contact" class="hidden"></div>
    <div id="cart" class="hidden"></div>
    `
}

export {render as renderAppPages}