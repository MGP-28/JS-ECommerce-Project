export function changeView(viewToShow){

    const app = document.querySelector('#app')
    const children = [...app.children]

    children.forEach(element => {
    (element.id == viewToShow) 
        ? element.classList.remove('hidden')
        : element.classList.add('hidden')
    });
}