const products=[
        {
            id: '1',
            name: 'Skate Santa cruz',
            Price: 13500,
            category:'Skates',
            img: 'https://cdnx.jumpseller.com/rata-envenena/image/17535759/resize/480/480?1642013965',
            stock: 8,
            description: 'Skateboards hecho con Hard Rock Maple de cóncavo medio forma recomendada para principiantes. Incluye trucks Bullet 130, ruedas Slime Balls de 52 mm y rodamientos Abec 5.'},
       { 
            id: '2',
            name: 'Tabla de skate plan B', 
            Price: 5750, 
            category:'Tablas', 
            img : 'https://www.fillow.net/images/products/zoom/1366617867-13297700.png', 
            width:50, 
            stock: 3, 
            description: 'Tabla profesional, está hecho de madera de arce canadiense de 7 capas de alta densidad; peso máximo de soporte de 220.5 lbs, apto para adultos y niños de 5 años en adelante.'},
        
        {
            id: '3', 
            name: 'Ruedas de skate spitfire', 
            Price: 3100, 
            category:'Ruedas',
            img: 'https://cdn.shopify.com/s/files/1/0146/2380/1444/products/3871470007_2000x.jpg?v=1636396606',
            stock: 2,
            description: 'medidas:52mm, diseno de bordes mas redondeados para un mayor control de velocidad '},

        { 
            id: '4', 
            name: 'Tabla de skate element',
            Price:4550,
            category:'Tablas', 
            img : 'https://i.pinimg.com/originals/f7/95/0a/f7950a9a6c3f4880dd49163d6b22e638.jpg', 
            description: 'posee unas dimensiones ligeramente más enfocadas a patinar en skatepark, rampa y bowl sin dejar de lado los mejores trucos y street.'},
        { 
            id: '5', 
            name: 'Tabla de skate girl', 
            Price: 9050, 
            category:'Tablas', 
            img : 'https://cdnx.jumpseller.com/life-boardshop/image/20759824/resize/635/635?1644261489', 
            width:50, 
            stock: 3, 
            description: 'Tabla profesional, está hecho de madera de arce canadiense de 7 capas de alta densidad; peso máximo de soporte de 220.5 lbs, apto para adultos y niños de 5 años en adelante.'},
        { 
            id: '6', 
            name: 'Skate completo Globe', 
            Price: 11990, 
            category:'Skates', 
            img : 'https://globebrand.cl/media/catalog/product/7/h/7hs142-mt21-1_ok.jpg?optimize=low&bg-color=255,255,255&fit=bounds&height=800&width=600&canvas=600:800', 
            width:50, 
            stock: 5, 
            description: 'Medidas Tabla 8" Ruedas Globe 52 mm 99a Hechas de uretano de alto rebote de Globe resistentes a la abrasión, más suaves, más rápidas y brindan un excelente agarre.'},       
        { 
            id: '7', 
            name: 'Skate completo Kalima', 
            Price: 15500, 
            category:'Skates', 
            img : 'https://www.ibikes.cl/wp-content/uploads/2021/08/RAY-560x560.jpeg',  
            width:50, 
            stock: 5, 
            description: 'El Skate Kalima Ray Se caracteriza por su calidad y su estética, con una cubierta de arce de 7 capas cóncava y rodamientos ABEC-5 en sus ruedas, hace que este skate no tenga competidor. Cubierta de arce de 7 capas cóncava.Medida: 8.0 x 32.125 PulgadasTrucks: 5 Pulgadas (tamañoño de suspensión)Buje: F25 x 10 x 13 mm.Ruedas: planas, 50 x 30 mm, 100A.Rodamientos: acero al carbono 608ZZ, ABEC-5'},
        {   
            id: '8', 
            name: 'Ruedas de skate BDSKATECO', 
            Price: 5000, 
            category:'Ruedas', 
            img : 'https://www.streetwarsonline.es/3136/2341.jpg', 
            width:50, 
            stock: 10, 
            description: 'Diametro: 52mm. Ancho: 33mm.Wheelsbase: 18mm,Dureza: 101A'},
        {   
            id: '9', 
            name: 'Ruedas de skate Spitfire', 
            Price: 4750, 
            category:'Ruedas', 
            img : 'https://http2.mlstatic.com/D_NQ_NP_683735-MCO47553233869_092021-V.jpg', 
            width:50, 
            stock: 5, 
            description: 'Diametro: 52mm. Ancho: 33mm.Wheelsbase: 18mm,Dureza: 101A'},

    ]

const categories =[
    {id: 'Tablas', name: 'TABLAS'},
    {id: 'Skates', name: 'SKATES'},
    {id: 'Ruedas', name: 'RUEDAS'}
]
export const getCategories =()=>{
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(categories)
        })
    })
}

  export const getProducts = (categoryId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(categoryId ? products.filter( prod => prod.category===categoryId ) : products);
      }, 500);
    });
  };

  
export const getProductsById =(id)=>{
    
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve(products.find(prod=> prod.id == id))
        },500)
    })
}
