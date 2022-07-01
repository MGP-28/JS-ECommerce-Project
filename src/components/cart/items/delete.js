import { renderGenericCartButton } from "./generic/cartButton"

function render(icon){
    const deleteContainerEl = document.createElement('div')
    const deleteEl = renderGenericCartButton('trash-can')

    //events
    

    deleteContainerEl.append(deleteEl)

    return deleteContainerEl
}

export {render as renderItemCartDelete}