async function getProducts() {

  const url = 'https://fakestoreapi.com/products/category/jewelery';

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

    console.log(error, 'Error fetching data');

  } 
}

export { getProducts };

