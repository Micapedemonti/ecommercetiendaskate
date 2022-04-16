import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"
import {Link} from 'react-router-dom'
import './ItemDetail.css'

const handleOnAdd =(quantity)=> {
  console.log ('se agregaron ${quantity} productos')
    }

const ItemDetail =({id, Price, name, description, img}) => { 
    return (
      <div className="cuerpoDetail">
      <div class="card-group cardDetail">
        <div class="card">
          <img class="card-img-top" src={img} alt="Card image cap"/>
          <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <p class="card-text">{Price}</p>
            <p class="card-text">{description}</p>
          </div>
          </div>
          </div>
          </div>
      // <section>
      //     <h2>{name}</h2>
        
      //     <picture>
      //         <img src= {img}/>
      //     </picture>
      //     <p> {description}</p>
      //     <p>${Price}</p>

      //     <footer>
            
      //     </footer> 
      // </section>
     
     
    )
}
export default ItemDetail