function render(){
    let formEl = document.createElement('form')
    formEl.classList.add('grid','gap-5','w-2/3','lg:w-1/3')
    formEl.setAttribute('id', 'contact-form-input')
    formEl.innerHTML = `
        <input type="name" id="contact-name" name="name" placeholder="Name" required class="h-14 border-4">
        <input type="email" id="contact-email" name="email" placeholder="Email" required class="h-14">
        <textarea type="text" id="contact-message" name="message" placeholder="Write your message here..." required></textarea>
        <button id="contact-submit" class="text-3xl h-14 w-full">Contact me!</button>
    `

    //events are done on the parent, due to irreliable event listeners

    return formEl
}

export {render as renderContactForm}