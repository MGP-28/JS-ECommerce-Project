function renderSearchBar () {

    const searchBarContainerEl = document.createElement('div');

    searchBarContainerEl.classList.add('flex', 'items-center', 'gap-2', 'w-full', 'sm:w-3/5');

    searchBarContainerEl.setAttribute('id', 'shop-search-container');

    searchBarContainerEl.innerHTML += `
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="text" class="input border-b border-black w-full" placeholder="Search">
    `

    const searchInput = searchBarContainerEl.querySelector('.input');

    searchInput.addEventListener('keyup', (e)=> {
        const shop = document.querySelector('#shop')
        let searchTerm = searchInput.value.toLowerCase();

        if(searchTerm) {
            const event = new CustomEvent('search', {
                detail: {
                    searchTerm: searchTerm
                }
            })

            shop.dispatchEvent(event);
        }
        else {
            const event = new Event('resetSearch');
            shop.dispatchEvent(event);
        }
    });


    return searchBarContainerEl;
}

export {renderSearchBar}