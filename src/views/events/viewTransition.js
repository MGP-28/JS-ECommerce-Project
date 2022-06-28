import { changeView } from "../generic/changeView.js"

function viewTransition(){
    //get button elements
    const viewTransitionButtons = [...document.querySelectorAll('a[relatedView]')]

    //asign events listeners on buttons to change between views
    viewTransitionButtons.forEach(btnLink => {
        btnLink.addEventListener('click', () =>{
            const viewToGo = btnLink.getAttribute('relatedView')
            changeView(viewToGo)
        })
    });
}

export { viewTransition }