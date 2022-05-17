import './ItemDetail.css'
import { useState,useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import CartContext from '../context/CartContext'

const InputCount = ({onConfirm, stock, initial=1}) => {
    const [count, setCount] = useState(initial)
    return (
        <div>
            <button onClick={() => onConfirm(count)}>Agregar al carrito</button>
        </div>
    )
}


const ItemDetail = ({ id, name, img, category, description, Price, stock}) => {

    const [quantity, setQuantity] = useState(0) 




    const {addItem, isInCart}= useContext(CartContext)


       const handleAdd=(count)=>{
      
       const productObj ={
           id,name,Price,img
       }
       
        addItem({...productObj,quantity:count})
       }


    return (
        <div className='CardContainer'>
        <article className="CardItem">
            <header className="Header">
                {/* <h2 className="titleDetalle">
                    {name}
                </h2> */}
            </header>
            <picture className='fotoDetalle'>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section className='detalleContainer'>
            <h2 className="titleDetalle">
                    {name}
                </h2>
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    Descripción: {description}
                </p>
                <p className="Info">
                    Precio: {Price}
                </p>
                <p className="Info">
                    Stock: {stock}
                </p>
                <div className='ItemFoot'>
                
                {isInCart(id) > 0 ? <Link className='btnIrCarrito' to='/cart'>Ir al carrito</Link> 
                : <ItemCount onAdd={handleAdd} stock={stock} /> } 

            </div>
            </section>           
            {/* <footer className='ItemFooter'>
                
                {isInCart(id) > 0 ? <Link to='/cart'>Ir al carrito</Link> 
                : <ItemCount onAdd={handleAdd} stock={stock} /> } 

            </footer> */}
        </article>
        </div>
    )
}

export default ItemDetail