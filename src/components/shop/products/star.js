import { updateStoredRating } from "../../../store/products";

function star(product, position, parent){

    const starContainerEl = document.createElement('div')
    starContainerEl.classList.add('h-10', 'w-10', 'hover:bg-red-500')
    //events

	parent.addEventListener('paintStars', (e) => {
		(position <= e.detail.maxPosition)
			? filledStar(starContainerEl)
			: hollowStar(starContainerEl)
	})
	
    starContainerEl.addEventListener('mouseover', () => {
        console.log('over')
        paintStarsEventDispatcher(position, parent);
    });

    starContainerEl.addEventListener('mouseout', () => {
        console.log('out')
        paintStarsEventDispatcher(product.rating);
    });

    starContainerEl.addEventListener('click', (e) => {
        console.log('click')
        updateStoredRating(product, position);
        paintStarsEventDispatcher(product.rating);
    });

    parent.append(starContainerEl)
}

function paintStarsEventDispatcher(positionToBroadcast, parent){
    const positionToBroadcastEvent = new CustomEvent('paintStars', {
        detail: {
            maxPosition: positionToBroadcast
        }
    })
    parent.dispatchEvent(positionToBroadcastEvent);
}

function filledStar(starContainerEl){
    starContainerEl.classList.add('bg-yellow-600')
    starContainerEl.classList.remove('bg-yellow-400')
    //starContainerEl.innerHTML = `<i class="fa-solid fa-star"></i>`
}

function hollowStar(starContainerEl){
    starContainerEl.classList.remove('bg-yellow-600')
    starContainerEl.classList.add('bg-yellow-400')
    //starContainerEl.innerHTML = `<i class="fa-regular fa-star"></i>`
}

export {star};