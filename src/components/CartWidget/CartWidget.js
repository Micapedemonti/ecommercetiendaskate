import './CartWidget.css'
import { useContext } from 'react'
import CartContext from '../context/CartContext'
import carrito from '../../assets/carrito.png'


const CartWidget=()=>{
    
    const{getQuantity}=useContext(CartContext)

    

   return(
       <div className='CajaCarrito'>
           <img src={carrito} className='LogoCarrito'/>
           {getQuantity()}
       </div>
   )
}
export default CartWidget