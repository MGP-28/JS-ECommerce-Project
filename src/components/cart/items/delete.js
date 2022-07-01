import { renderGenericCartButton } from "./generic/cartButton"

function render(icon){
    const deleteContainerEl = document.createElement('div')
    deleteContainerEl.append(renderGenericCartButton('trash-can'))

    return deleteContainerEl
}

export {render as renderItemCartDelete}