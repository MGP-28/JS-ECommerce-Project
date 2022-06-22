async function getProducts() {

  const url = 'https://fakestoreapi.com/products/category/jewelery';
  let data

  try {
    data = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(res => res.json())
      
  } catch (error) {
    console.log(error, 'Error fetching data');

  } finally {
    return data

  }

}

export { getProducts };

