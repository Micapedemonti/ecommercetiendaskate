import './Item.css';
import {Link} from 'react-router-dom'
const Item =({id, name, img, Price,stock}) => {


    return(
        <div class="card-group">
        <div class="card">
          <img  src={img} alt="Card image cap"/>
            <h5 class="card-title">{name}</h5>
            <p class="card-text"> ${Price}</p>
          <div class="card-footer">
          <Link className='btnDetalle' to={`/detail/${id}`}>Ver detalle</Link> 
          <span class="iconify" data-icon="akar-icons:arrow-right" data-width="15" data-height="15"></span>
          </div>
          </div>
          </div>

)
}




export default Item