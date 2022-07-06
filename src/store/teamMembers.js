import { TeamMember } from "../model/teamMember";

let teamMembers = [
    new TeamMember('João Pereira', 'https://avatars.githubusercontent.com/u/94644053?v=4'),
    new TeamMember('Márcio Miguel', 'https://avatars.githubusercontent.com/u/94644101?v=4'),
    new TeamMember('Pedro Teixeira', 'https://avatars.githubusercontent.com/u/95039555?v=4'),
    new TeamMember('António Camarão', 'https://avatars.githubusercontent.com/u/94643982?v=4')
]

export function getTeamMembersData(){
    return teamMembers
}