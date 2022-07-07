export function renderPopup(isConfirmation, message){
    const container = document.createElement('div')
    container.classList.add('fixed','w-full','h-full','background-half','grid','place-items-center','top-0', 'left-0', 'z-50')

    const popup = document.createElement('div')
    popup.classList.add('background-beige','border-2','rounded','flex','flex-col','justify-between','items-center','w-80','sm:w-96','h-80','sm:h-96','p-8','gap-8')
    container.append(popup)

    
    if (isConfirmation) popup.classList.add('border-green-600')
    else popup.classList.add('border-red-600')
    
    
    const messageBox = document.createElement('div')
    messageBox.textContent = message
    messageBox.classList.add('w-full','h-2/3','flex','justify-center','items-center','text-lg')
    popup.append(messageBox)
    
    const button = document.createElement('button')
    button.textContent = 'Got it'
    button.classList.add('w-1/2','h-10','text-xl','border', 'border-black', 'background-beige', 'shadow', 'font-parisienne', 'hover:border-orange-300', 'hover:border-2', 'hover:shadow-md')
    button.addEventListener('click', () => {
        container.remove()
    })
    popup.append(button)
    
    document.querySelector('#app').append(popup)
}