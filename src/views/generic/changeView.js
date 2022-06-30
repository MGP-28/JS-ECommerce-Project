export function changeView(viewToShow){

    const appViews = document.querySelectorAll('#app>div')

    appViews.forEach(element => {
    (element.id == viewToShow) 
        ? element.classList.remove('hidden')
        : element.classList.add('hidden')
    });
}