function render(icon){
    const btnEl = document.createElement('button')
    btnEl.classList.add('hover:border-orange-300', 'hover:border-2', 'hover:shadow-md', 'text-orange-500', 'border-2', 'border-gray-300', 'rounded', 'shadow', 'w-10', 'h-10')

    const btnIconEl = document.createElement('i')
    btnIconEl.classList.add('fa-solid', 'fa-'+icon)
    btnEl.append(btnIconEl)

    return btnEl
}

export {render as renderGenericCartButton}