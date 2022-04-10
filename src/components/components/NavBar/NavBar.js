import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import ItemCount from '../ItemCount/ItemCount'


const NavBar =() =>{
    return (
        <nav class="navbar navbar-expand-lg navbar-light  menuNav">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">INICIO</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  PRODUCTOS
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Tablas</a></li>
                  <li><a class="dropdown-item" href="#">Skate completos</a></li>
                  <li><a class="dropdown-item" href="#">Ruedas</a></li>
                  <li><a class="dropdown-item" href="#">Trucks</a></li>
                  <li><a class="dropdown-item" href="#">Accesorios</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link " aria-current="page" href="#">NOSOTROS</a>
              </li>
              <li class="nav-item">
                <a class="nav-link " aria-current="page" href="#">CONTACTO</a>
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