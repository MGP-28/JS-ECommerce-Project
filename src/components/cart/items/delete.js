import { renderGenericCartButton } from "./generic/cartButton"

function render(cartItem, parent){
    const deleteContainerEl = document.createElement('div')
    const deleteEl = renderGenericCartButton('trash-can')

    //events
    deleteEl.addEventListener('click', ()=>{

        //store, ...
        
        parent.dispatchEvent(new Event('removeSelf'))
    })

    deleteContainerEl.append(deleteEl)

    return deleteContainerEl
}

export {render as renderItemCartDelete}