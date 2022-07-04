import { removeUnitFromCart } from "../../../store/products"
import { renderGenericCartButton } from "./generic/cartButton"

function render(cartItem, parent){
    const deleteContainerEl = document.createElement('div')
    const deleteEl = renderGenericCartButton('trash-can')

    //events
    deleteEl.addEventListener('click', ()=>{

        removeUnitFromCart(cartItem, true)
        
        parent.dispatchEvent(new Event('removeSelf'))
    })

    deleteContainerEl.append(deleteEl)

    return deleteContainerEl
}

export {render as renderItemCartDelete}