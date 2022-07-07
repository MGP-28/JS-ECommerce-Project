async function getContactUsers(){

    let retries = 1

    while(retries > 0){

        try{
            let promises = ['https://randomuser.me/api/','https://randomuser.me/api/']
            let teamMembers = []
            const jobs = ['Sales Representative', 'Head of Human Resources']

            const responses = await Promise.all(promises.map(url => fetch(url)))
            const data = await Promise.all(responses.map(response => response.json()))

            const jobsLength = jobs.length
            for (let index = 0; index < jobsLength; index++) {

                const name = data[index].results[0].name.first + ' ' + data[index].results[0].name.last
                const image = data[index].results[0].picture.large
                const job = jobs[index]

                const teamMember = {name: name, image: image, job: job}
                teamMembers.push(teamMember)
            }

            return teamMembers

        }catch(error){
            retries--;
            console.log(error)
            console.log('contacts: retries left: ', retries)
        }     
    }  
    return false
}

export {getContactUsers}
