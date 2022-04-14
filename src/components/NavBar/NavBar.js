import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import ItemCount from '../ItemCount/ItemCount'
import {Link} from 'react-router-dom'


const NavBar =() =>{
    return (
        <nav class="navbar navbar-expand-lg navbar-light  menuNav">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <li class="nav-item">
                <Link class="nav-link active" to='/'>INICIO</Link>
                </li> */}
              <li class="nav-item">
                <a class="nav-link "href="#">PRODUCTOS</a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="#">DETALLE</a>
              </li>
              <div>
          <CartWidget/>

        </div>
            </ul>
          </div>
        </div>
      
      </nav>
      
    )
}

export default NavBar