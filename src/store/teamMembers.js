import { TeamMember } from "../model/teamMember";

let teamMembers = [
    new TeamMember('João Pereira', 'https://avatars.githubusercontent.com/u/94644053?v=4', 'https://github.com/MGP-28'),
    new TeamMember('Márcio Miguel', 'https://avatars.githubusercontent.com/u/94644101?v=4', 'https://github.com/MHPM1980'),
    new TeamMember('Pedro Teixeira', 'https://avatars.githubusercontent.com/u/95039555?v=4', 'https://github.com/PedroTeixeira00'),
    new TeamMember('António Camarão', 'https://avatars.githubusercontent.com/u/94643982?v=4', 'https://github.com/SShrimpman')
]

export function getTeamMembersData(){
    return teamMembers
}