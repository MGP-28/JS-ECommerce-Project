import { getTeamMembersData } from "../../store/teamMembers"


function render(){
    const teamMembers = getTeamMembersData()
    document.querySelector('#app').innerHTML += `
    <footer class="p-4 shadow bg-orange-300 text-center flex flex-col gap-2 md:flex-row md:items-center md:justify-between md:p-6">
      <span class="text-sm sm:text-center">© 2022 DekiDeki™. All Rights Reserved.</span>
      <ul class="grid grid-cols-2 text-sm gap-1 md:gap-5 md:flex md:flex-wrap md:items-center ">
          <li>
              <h1><a href="${teamMembers[0].page}">${teamMembers[0].name}</a></h1>
          </li>
          <li>
              <h1><a href="${teamMembers[1].page}">${teamMembers[1].name}</a></h1>
          </li>
          <li>
              <h1><a href="${teamMembers[2].page}">${teamMembers[2].name}</a></h1>
          </li>
          <li>
              <h1><a href="${teamMembers[3].page}">${teamMembers[3].name}</a></h1>
          </li>
      </ul>
    </footer>
    `
}

export {render as renderFooter}