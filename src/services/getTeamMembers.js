import { TeamMember } from "../model/teamMember";

async function getTeamMembers() {

    const membersGithubIds = ['MGP-28', 'MHPM1980', 'PedroTeixeira00', 'sshrimpman']

    const url = 'https://api.github.com/users/MGP-28';

    let promises = [];
    membersGithubIds.forEach(githubId => {
        promises.push(url + githubId)
    });
  
    try {
        const responses = await Promise.all(promises.map(url => fetch(url)))
        const data = await Promise.all(responses.map(response => response.json()))

        const teamMembers = []
        teamMembers.forEach((githubUser, index) => {
            const {name, avatar_url} = githubUser
            const teamMember = new TeamMember(name, avatar_url, (index == 0) ? true : false)
            teamMembers.push(teamMember)
        });

        return teamMembers
        
    } catch (error) {
  
      console.log(error, 'Error fetching data');
  
    } 
  }
  
  export { getTeamMembers };