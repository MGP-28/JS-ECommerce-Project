function render(teamMember){
    const card = document.createElement('a')
    card.setAttribute('href', teamMember.page)
    card.setAttribute('target', '_blank')
    card.classList.add('flex', 'flex-col', 'items-center', 'gap-5', 'w-max', 'p-5', 'border', 'shadow-lg', 'bg-white', 'hover:scale-105')
    card.innerHTML = `
        <img class="w-64 border border-gray-200 bg-gray-100" src="${teamMember.image}" alt="">
        <h4 class="text-center text-2xl">${teamMember.name}</h4>
    `
    return card
}

export {render as renderTeamMemberCard}