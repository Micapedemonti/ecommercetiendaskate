const products=[
    {
        id: 1,
        name: 'skate Santa cruz',
        Price: 13500,
        category:'Skates completos',
        img: 'https://cdnx.jumpseller.com/rata-envenena/image/17535759/resize/480/480?1642013965',
        stock: 8,
        description: 'Descripcion de skate Santa Cruz'
    }
]

export const getProducts =()=>{
    
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve(products)
        },2000)
    })
}