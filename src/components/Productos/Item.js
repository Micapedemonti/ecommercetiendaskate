import './Item.css';
import {Link} from 'react-router-dom'
const Item =({id, name, img, Price,stock}) => {


    return(
        <div class="card-group">
        <div class="card">
          <img  src={img} alt="Card image cap"/>
            <h5 class="card-title">{name}</h5>
            <p class="card-text"> {Price}</p>
          <div class="card-footer">
          <Link to={`/detail/${id}`}>Ver detalle</Link> 
          </div>
          </div>
          </div>

)
}




export default Item