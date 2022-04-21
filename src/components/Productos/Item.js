import './Item.css';
import {Link} from 'react-router-dom'
import { useContext } from 'react';
import { Context } from '../../App';


const Item =({id, name, img, Price}) => {



const value=useContext(Context)
console.log(value)
  
    return(
        <div class="card-group">
        <div class="card">
          <img class="card-img-top" src={img} alt="Card image cap"/>
          <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <p class="card-text">{Price}</p>
          </div>
          <div class="card-footer">
          <Link to={`detail/${id}`}>Ver detalle</Link> 
          </div>
          </div>
          </div>

)
}








    {/* //    <article className='CardItem'>
           
    //       <picture className='articulos'>
    //           <img src ={img} alt ={name}/>
    //       </picture>
    //      <section className='seccionProducts'>
    //       <h3>{name}</h3>
    //       <p>{Price} </p>
    //       </section>
    //  <footer>
    //      <Link to={`detail/${id}`}>Ver detalle</Link> 
    //      </footer>
    //     </article>
    // )
    // }  */}

export default Item
         
       