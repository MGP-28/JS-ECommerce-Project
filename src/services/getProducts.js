async function getProducts() {

  const url = 'https://fakestoreapi.com/products/category/jewelery';

  try {
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res=>res.json())
      .then(json=>{
          console.log(json); 
          return json;
      })
      
  } catch (error) {
    console.log(error, 'Error fetching data');
  }
}

export { getProducts };

