import './Item.css';
import {Link} from 'react-router-dom'
const Item =({id, name, img, Price}) => {


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




export default Item