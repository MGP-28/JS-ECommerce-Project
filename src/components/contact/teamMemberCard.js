export function teamMemberCard(teamMember){

    const containerEl = document.createElement('div')
    containerEl.classList.add('flex','flex-col','items-center','gap-3')
    containerEl.setAttribute('id', 'contact-userData')
    containerEl.innerHTML = `
        <img src="${teamMember.image}" alt="" id="contact-user-img">
        <span id="contact-userName">${teamMember.name}</span>
        <span id="contact-userWork">${teamMember.job}</span>
        <span id="contact-userDescription" class="pb-3 text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto iste necessitatibus quis culpa esse vel, labore molestiae enim. Facilis minima quas sint, dolore necessitatibus ea inventore molestias amet iste itaque.
        </span>
        <button type="submit" id="contact-userButton" class="font-parisienne border border-black hover:border-orange-300 hover:shadow-md">Send Message</button>
    `

    return containerEl
}