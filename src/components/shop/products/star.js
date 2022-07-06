import { updateStoredRating } from "../../../store/products";

function star(product, position, parent){

    const starContainerEl = document.createElement('div')
    starContainerEl.classList.add('h-10', 'w-10')
    //events

	parent.addEventListener('paintStars', (e) => {
		if (position <= e.detail.maxPosition) filledStar(starContainerEl)
		else hollowStar(starContainerEl)
	})
	
    starContainerEl.addEventListener('mouseenter', () => {
        paintStarsEventDispatcher(position, parent);
    });

    starContainerEl.addEventListener('mouseleave', () => {
        paintStarsEventDispatcher(product.rating, parent);
    });

    starContainerEl.addEventListener('click', (e) => {
        updateStoredRating(product, position);
        paintStarsEventDispatcher(product.rating, parent);
    });

    parent.append(starContainerEl) //append to parent
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
    starContainerEl.innerHTML = `<i class="fa-solid fa-star"></i>`
}

function hollowStar(starContainerEl){
    starContainerEl.innerHTML = `<i class="fa-regular fa-star"></i>`
}

export {star};