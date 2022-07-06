import {star} from './star.js';

export function rating(product){
    const ratingEl = document.createElement('div');

    ratingEl.classList.add('absolute', 'w-3/5', 'h-10',  'card-rating', 'grid', 'place-items-center', 'grid-cols-5', 'text-amber-400');

    for (let position = 1; position <= 5; position++) {
        star(product, position, ratingEl);
    }

    const paintStars = new CustomEvent('paintStars', {
        detail: {
            maxPosition: product.rating
        }
    })
    ratingEl.dispatchEvent(paintStars)

    ratingEl.addEventListener('click', () => {
        console.log('click')
    });

    return ratingEl;
}
