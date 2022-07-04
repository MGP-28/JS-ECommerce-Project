function render(){
    document.querySelector('#app').innerHTML += `
    <div id="shop" class="hidden"></div>
    <div id="about" class="hidden"></div>
    <div id="contact" class="hidden"></div>
    <div id="cart"></div>
    `
}

export {render as renderAppPages}