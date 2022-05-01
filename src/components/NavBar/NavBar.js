import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import {Link,NavLink} from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getCategories } from '../../asyncmock'
      
      
      const NavBar =() =>{
        const [categories, setCategories] =useState([])

      useEffect(()=>{
        getCategories().then (categories =>{
          setCategories(categories)
        })
      },[])

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
                    {categories.map(cat=> <NavLink key ={cat.id} to ={`/category/${cat.id}`} 
                    className={({isActive})=> isActive ? 'ActiveOption ': 'Option'}
                    >{cat.name}</NavLink>)}
                       
                    <div>
      
              </div>
                  </ul>
                  <CartWidget/>
                </div>
              </div>
            
            </nav>
            
          )
      }


export default NavBar