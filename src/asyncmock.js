const products=[
    {
        id: '1',
        name: 'Skate Santa cruz',
        Price: 13500,
        category:'Skates completos',
        img: 'https://cdnx.jumpseller.com/rata-envenena/image/17535759/resize/480/480?1642013965',
        stock: 8,
        description: 'Descripcion de skate Santa Cruz'
    },
    { id: '2', name: 'Tabla de skate plan B', Price: 5750, category:'Tablas', img : 'https://www.fillow.net/images/products/zoom/1366617867-13297700.png', width:50, stock: 3, description: 'Descripcion de Tabla Plan B'},
    {id: '3', name: 'Ruedas de skate spitfire', Price: 3100, category:'Ruedas', img: 'https://cdn.shopify.com/s/files/1/0146/2380/1444/products/3871470007_2000x.jpg?v=1636396606', stock: 2, description: 'Descripcion de ruedas spitfire'}

]

export const getProducts =()=>{
    
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve(products)
        },1000)
    })
}
export const getProductsById =(id)=>{
    
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve(products.find(prod=> prod.id == id))
        },500)
    })
}

