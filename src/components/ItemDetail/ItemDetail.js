import './ItemCount'

const ItemDetail =({id, name, img, category, description,price})=>{
    return (
       <div>
           <img src={img} alt={name}/>
           <h5>{name}</h5>
           <p>Descripcion:{description}</p>
           <p>Precio:${price}</p>
           <counter/>
       </div>
    )
}
export default ItemDetail

