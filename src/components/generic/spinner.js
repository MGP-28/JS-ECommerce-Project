//<i class="fa-solid fa-spinner anim-spinner place-self-center h-16"></i>

export function renderSpinner(){
    const spinner = document.createElement('i')
    spinner.classList.add('fa-solid','fa-spinner','anim-spinner','place-self-center')
    return spinner
}