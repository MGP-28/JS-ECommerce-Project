import { getRandomUser } from "./getUser"

async function getContactUsers(){
    const contacts = []

    for (let index = 0; index < 2; index++) {
        const user = await getRandomUser()
        if(user) contacts.push(user)
        else return false
    }

    return contacts
}

export {getContactUsers}
