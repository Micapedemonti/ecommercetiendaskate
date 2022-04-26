import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import {Link,NavLink} from 'react-router-dom'
      
      
      const NavBar =() =>{
          return (
              <nav class="navbar navbar-expand-lg navbar-light  menuNav">
              <div class="container-fluid">
              <div className="Caja-logo">
                <Link to= './'>
                  <img src='./images/logo.png'/>
                </Link>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse menuNav" id="navbarSupportedContent">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                      <Link class="nav-link active" to='/Cart'></Link>
                      </li>
                  <li class="nav-item">
                      <Link class="nav-link active" to='/logo'></Link>
                      </li>
                    <li class="nav-item">
                      <Link class="nav-link active" to='/'>INICIO</Link>
                      </li>
                    <li class="nav-item">
                    <Link to= '/ofertas' class="nav-link active">OFERTAS</Link>
                    </li>
                    <li class="nav-item">
                    <Link to= '/tablas' class="nav-link active">TABLAS</Link>
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