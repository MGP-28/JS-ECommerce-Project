import { renderTeamMemberCard } from "../components/about/teamMemberCard";
import { getTeamMembersData } from "../store/teamMembers";


export function about(){
    const teamMembers = getTeamMembersData()
    const aboutEl = document.querySelector('#about')
    aboutEl.innerHTML = `
        <div class="flex flex-col justify-center xl:flex-row">
            <section id="about-gallery" class="w-full h-auto xl:w-2/3 flex justify-center">
                <div id="about-gallery-grid" class="w-full gap-10 p-10 md:p-32">
                    <div class="gallery-image-area-a shadow-lg border border-gray-200"></div>
                    <div class="gallery-image-area-b shadow-lg border border-gray-200"></div>
                    <div class="gallery-image-area-c shadow-lg border border-gray-200"></div>
                    <div class="gallery-image-area-d shadow-lg border border-gray-200"></div>
                </div>
            </section>
            <aside id="about-team" class="p-20 w-full xl:w-1/3 shadow-lg border border-gray-200 flex flex-col gap-14">
                <div class="flex flex-col gap-5">
                    <h1 class="text-center font-parisienne text-5xl mb-5">Javascript / Git Project</h1>
                    <h2 class="text-center text-2xl">UFCDs 5415 | 5409</h2>
                    <h2 class="text-center text-2xl">TPSI 10.21</h2>
                </div>
                <div class="divider div-transparent div-dot"></div>
                <section class="flex flex-col gap-8">
                    <h1 class="text-center font-parisienne font-size-40">The Team</h1>
                    <div teamLeader class="flex flex-col items-center gap-5">
                        <h3 class="text-center text-2xl font-bold">Team Leader</h3>
                    </div>
                    <div teamMember class="flex flex-col items-center gap-5">
                        <h3 class="text-center text-2xl font-bold mt-5">Team Members</h3>
                    </div>
                </section>
            </aside>
        </div>
    `

    // insert team members by atribute from the team members array
    aboutEl.querySelector('div[teamLeader]').append(renderTeamMemberCard(teamMembers[0]))
    aboutEl.querySelector('div[teamMember]').append(renderTeamMemberCard(teamMembers[1]), renderTeamMemberCard(teamMembers[2]), renderTeamMemberCard(teamMembers[3]))
}