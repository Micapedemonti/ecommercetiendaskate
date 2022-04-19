import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"
import {Link} from 'react-router-dom'
import './ItemDetail.css'
import Item from "../Productos/Item"

// const handleOnAdd =(ItemCount)=> {
//   console.log ('se agregaron ${quantity} productos')
  
//     }


// const [quantity, setQuantity]= useState(0)
// const handleOnAdd =(ItemCount)=>{
//   console.log ('se agregaron ${ItemCount} productos')
//   setQuantity(ItemCount)
// }
// const [quantity, setQuantity]= useState(0)

const ItemDetail =({id, Price, name, description, img}) => { 
  const [count, setCount]= useState(1)
   const handleOnAdd =(count)=>{
    console.log (`se agregaron ${count} productos`)
  
  
    }

    return (
      <div className="cuerpoDetail">
      <div class="card-group cardDetail">
        <div class="card">
          <img class="card-img-top" src={img} alt="Card image cap"/>
          <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <p class="card-text">{Price}</p>
            <p class="card-text">{description}</p>
         <ItemCount onAdd={handleOnAdd} stock ={15}/> 
            {count > 0 ? <Link to='/cart'>Ir al carrito</Link> : <Link to='/cart'>Ir al carrito </Link>}
          </div>
          </div>
          </div>
          </div>

     
    )
}
export default ItemDetail