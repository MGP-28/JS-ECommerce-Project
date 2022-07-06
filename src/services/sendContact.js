async function sendContact(formContact){
    const contactJSON = buildJSON(formContact)

    const response = await sendData(contactJSON)
    if(response) document.dispatchEvent(new Event('contactSuccessful'))
    else document.dispatchEvent(new Event('contactFailed'))
}

function buildJSON(formContact){

    const {name, email, message} = formContact

    return JSON.stringify({
        fullname: name,
        email: email,
        message: message
    })
}

async function sendData(json){
    let retries = 5

    while(retries > 0){
        try{
            await fetch('http://localhost:6868/contactform', {
                method: "POST",
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Accept': '*/*',
                    'User-Agent': 'DekiDeki',
                    'Content-Type': 'application/json'
                }, 
                body: json
            }).then((response) => {
                if(response.status === 201) retries = -1
                else retries = 0
            });
        }catch(error){
            retries--
            console.log(error)
            console.log(`error -> retries left: ${retries}`)
        }
    }

    return (retries >= 0) 
        ? false
        : true
}

export {sendContact}