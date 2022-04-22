import './CartWidget.css'
import { useContext } from 'react'
import CartContext from '../context/CartContext'


const CartWidget=()=>{
    
    const{getQuantity}=useContext(CartContext)

    

   return(
       <div className='CajaCarrito'>
           <img src='./images/cartcompras.png' className='LogoCarrito'/>
           {getQuantity()}
       </div>
   )
}
export default CartWidget