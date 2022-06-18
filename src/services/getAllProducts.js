

export function getAllProducts(){
    fetch('https://fakestoreapi.com/products/category/jewelery')
        .then(res=>res.json())
        .then(json=>{
            console.log(json)
        })   
}