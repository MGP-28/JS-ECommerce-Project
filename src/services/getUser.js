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
      
      return data
        
    } catch (error) {
  
      return false
  
    } 
  }  
}
  
  export { getRandomUser };