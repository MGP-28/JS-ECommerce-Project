import { goToCart } from "./goToCart";
import { renderSearchBar } from "./search";

function renderTopRow() {

    const searchBarContainerEl = document.createElement('div');

    searchBarContainerEl.classList.add('flex', 'flex-wrap', 'justify-center', 'gap-12', 'mx-5');

    searchBarContainerEl.setAttribute('id', 'shop-search-button-row');

    searchBarContainerEl.append(renderSearchBar());

    searchBarContainerEl.append(goToCart());

    return searchBarContainerEl;

}

export {renderTopRow};