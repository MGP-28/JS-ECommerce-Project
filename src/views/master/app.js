import { renderPopup } from "../../components/generic/popup"

function render(){
    document.querySelector('#app').innerHTML += `
    <div id="shop"></div>
    <div id="about" class="hidden"></div>
    <div id="contact" class="hidden"></div>
    <div id="cart" class="hidden"></div>
    `

    //document.querySelector('#app').append(renderPopup(false,'És um nabo'))
}

export {render as renderAppPages}