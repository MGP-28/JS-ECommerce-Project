import {star} from './star.js';

export function rating(product){
    const ratingEl = document.createElement('div');

    ratingEl.classList.add('relative', 'w-3/5', 'h-10',  'card-rating', 'grid', 'place-items-center', 'grid-cols-5', 'text-amber-400');

    for (let position = 1; position <= 5; position++) {
        ratingEl.append(star(position));
    }

    return ratingEl;
}



function paintStars(index){

}