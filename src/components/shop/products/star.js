import { updateStoredRating } from "../../../store/products";


function star(product, position){

    const starEl = document.createElement('i');

    starEl.classList.add('fa-star', 'fa-solid');   // Remover fa-solid



    //events

// 	rating > paintStars {
// 		(position <= detail.maxPosition)
// 			? fillStar(star)
// 			: hollowStar(star)
// 	}
	
    starEl.addEventListener('mouseover', () => {
        paintStarsEventDispatcher(position);
    });

    starEl.addEventListener('mouseout', () => {
        paintStarsEventDispatcher(product.rating);
    });

    starEl.addEventListener('click', () => {
        updateStoredRating(product, position);
        paintStarsEventDispatcher(product.rating);
    });


    //Functions

    // paintStarsEventDispatcher(positionToBroadcast){
	// 	positionToBroadcast = new CustomEvent('paintStars', {
	// 		detail: {
	// 			maxPosition: ratingToSend
	// 		}
	// 	})
	// 	rating.dispatchEvent(positionToBroadcast);
	// }

	// fillStar(star){
	// 	star.classList.add('fa-solid')
	// 	star.classList.remove('fa-regular')
	// }
	
	// fillStar(star){
	// 	star.classList.add('fa-regular')
	// 	star.classList.remove('fa-solid')
	// }

    return starEl;

}

export {star};