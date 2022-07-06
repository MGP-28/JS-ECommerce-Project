async function getProductsFromAPI() {

  const url = 'https://fakestoreapi.com/products/category/jewelery';

  try {

    const data = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(res => res.json())

    let shuffle = [...data.map(object => ({ ...object }))];

    shuffle.push(shuffle.shift());
    
    const products = [...data.map(object => ({ ...object })), ...shuffle];
    
    for (let i = 0; i <= 3; i++) {
      products[i].id = i+1;
      products[i].price = (products[i].price * 0.7).toFixed(2);
    } 

    return products
      
  } catch (error) {

    console.log(error, 'Error fetching data');

    throw error

  } 
}

export { getProductsFromAPI };

