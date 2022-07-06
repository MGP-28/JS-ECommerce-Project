import { getRandomUser } from "./getUser"

async function getContactUsers(){
    const contacts = []

    try{
        for (let index = 0; index < 2; index++) {
            contacts.push(await getRandomUser())
        }
    }catch(error){
        return false
    }

    return contacts
}

export {getContactUsers}