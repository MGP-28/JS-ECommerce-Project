import { removeUnitFromCart } from "../../../store/products"
import { renderGenericCartButton } from "./generic/cartButton"

function render(cartItem, parent){
    const deleteContainerEl = document.createElement('div')
    const deleteEl = renderGenericCartButton('trash-can')

    //events
    deleteEl.addEventListener('click', ()=>{

        removeUnitFromCart(cartItem, true)
        
        parent.dispatchEvent(new Event('removeSelf'))
        document.dispatchEvent(new CustomEvent('cartChanged', {detail: false}))
    })

    deleteContainerEl.append(deleteEl)

    return deleteContainerEl
}

export {render as renderItemCartDelete}