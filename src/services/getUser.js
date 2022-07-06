async function getRandomUser() {

  const retries = 5

  while(retries > 0){
    const url = 'https://randomuser.me/api/';

    try {
  
      const data = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(res => res.json())
      .then(data => {

        const name = data.results.name.first + '' + data.results.name.last
        const image = data.results.picture.thumbnail
  
        console.log(name)
        console.log(image)

        return {name: name, image: image}
      })

      return data
        
    } catch (error) {
  
      return false
  
    } 
  }  
}
  
  export { getRandomUser };