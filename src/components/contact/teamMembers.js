import { getContactUsers } from "../../services/getUsers"
import { teamMemberCard } from "./teamMemberCard"

export async function teamMembers(){
    
    const teamMembersContainerEl = document.createElement('div')
    teamMembersContainerEl.classList.add('grid','gap-16','md:grid-cols-2','px-12','2xl:px-96')
    teamMembersContainerEl.setAttribute('id', 'contact-user')

    const teamMembers = await getContactUsers()

    teamMembers.forEach(teamMember => {
        teamMembersContainerEl.append(teamMemberCard(teamMember))
    });

    return teamMembersContainerEl
}