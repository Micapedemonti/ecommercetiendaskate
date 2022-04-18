const products=[
        {
            id: '1',
            name: 'Skate Santa cruz',
            Price: 13500,
            category:'Skates completos',
            img: 'https://cdnx.jumpseller.com/rata-envenena/image/17535759/resize/480/480?1642013965',
            stock: 8,
            description: 'Skateboards hecho con Hard Rock Maple de cóncavo medio forma recomendada para principiantes. Incluye trucks Bullet 130, ruedas Slime Balls de 52 mm y rodamientos Abec 5.'},
        { id: '2', name: 'Tabla de skate plan B', Price: 5750, category:'Tablas', img : 'https://www.fillow.net/images/products/zoom/1366617867-13297700.png', width:50, stock: 3, description: 'Tabla profesional, está hecho de madera de arce canadiense de 7 capas de alta densidad; peso máximo de soporte de 220.5 lbs, apto para adultos y niños de 5 años en adelante.'},
        {id: '3', name: 'Ruedas de skate spitfire', Price: 3100, category:'Ruedas', img: 'https://cdn.shopify.com/s/files/1/0146/2380/1444/products/3871470007_2000x.jpg?v=1636396606',
         stock: 2, description: 'medidas:52mm, diseno de bordes mas redondeados para un mayor control de velocidad '},
         { id: '4', name: 'Tabla de skate element', Price:4550, category:'Tablas', img : 'https://i.pinimg.com/originals/f7/95/0a/f7950a9a6c3f4880dd49163d6b22e638.jpg', description: 'posee unas dimensiones ligeramente más enfocadas a patinar en skatepark, rampa y bowl sin dejar de lado los mejores trucos y street.'},
         { id: '5', name: 'Tabla de skate girl', Price: 9050, category:'Tablas', img : 'https://cdnx.jumpseller.com/life-boardshop/image/20759824/resize/635/635?1644261489', width:50, stock: 3, description: 'Tabla profesional, está hecho de madera de arce canadiense de 7 capas de alta densidad; peso máximo de soporte de 220.5 lbs, apto para adultos y niños de 5 años en adelante.'},
    ]
// const products=[
//     {
//         id: '1',
//         name: 'Skate Santa cruz',
//         Price: 13500,
//         category:'Skates completos',
//         img: 'https://cdnx.jumpseller.com/rata-envenena/image/17535759/resize/480/480?1642013965',
//         stock: 8,
//         description: 'Skateboards hecho con Hard Rock Maple de cóncavo medio forma recomendada para principiantes. Incluye trucks Bullet 130, ruedas Slime Balls de 52 mm y rodamientos Abec 5.'},
//     { id: '2', name: 'Tabla de skate plan B', Price: 5750, category:'Tablas', img : 'https://www.fillow.net/images/products/zoom/1366617867-13297700.png', width:50, stock: 3, description: 'Tabla profesional, está hecho de madera de arce canadiense de 7 capas de alta densidad; peso máximo de soporte de 220.5 lbs, apto para adultos y niños de 5 años en adelante.'},
//     {id: '3', name: 'Ruedas de skate spitfire', Price: 3100, category:'Ruedas', img: 'https://cdn.shopify.com/s/files/1/0146/2380/1444/products/3871470007_2000x.jpg?v=1636396606',
//      stock: 2, description: 'medidas:52mm, diseno de bordes mas redondeados para un mayor control de velocidad '},
//      { id: '2', name: 'Tabla de skate plan B', Price: 5750, category:'Tablas', img : 'https://www.fillow.net/images/products/zoom/1366617867-13297700.png', width:50, stock: 3, description: 'Tabla profesional, está hecho de madera de arce canadiense de 7 capas de alta densidad; peso máximo de soporte de 220.5 lbs, apto para adultos y niños de 5 años en adelante.'},
//      { id: '2', name: 'Tabla de skate girl', Price: 9050, category:'Tablas', img : 'https://cdnx.jumpseller.com/life-boardshop/image/20759824/resize/635/635?1644261489', width:50, stock: 3, description: 'Tabla profesional, está hecho de madera de arce canadiense de 7 capas de alta densidad; peso máximo de soporte de 220.5 lbs, apto para adultos y niños de 5 años en adelante.'},
// ]


export const getProductsbyTablas =(category)=>{
    
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve(products.find(prod=> prod.category == category))
        },500)
    })
}
export const getProducts = (categoryId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(categoryId ? products.filter( prod => prod.category.includes(categoryId) ) : products);
      }, 500);
    });
  };
  
// export const getProducts =()=>{
    
//     return new Promise(resolve =>{
//         setTimeout(()=>{
//             resolve(products)
//         },1000)
//     })
// }
export const getProductsById =(id)=>{
    
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve(products.find(prod=> prod.id == id))
        },500)
    })
}
