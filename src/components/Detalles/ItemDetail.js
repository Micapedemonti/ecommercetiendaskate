import './ItemDetail.css'
import { useState,useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import { Context } from '../../App'

const InputCount = ({onConfirm, stock, initial=1}) => {
    const [count, setCount] = useState(initial)
    console.log(stock)


    return (
        <div>
            <button onClick={() => onConfirm(count)}>Agregar al carrito</button>
        </div>
    )
}


const ItemDetail = ({ id, name, img, category, description, price, stock}) => {
    // const [typeInput, setTypeInput] = useState(true)
    const [quantity, setQuantity] = useState(0) 




    const {cart,setCart}= useContext(Context)


       const handleAdd=(count)=>{
         console.log(count)
         setQuantity(count)
      
       const productObj ={
           id,name,price
       }
       
        setCart([...cart, {...productObj,quantity:count}])
       }

    // const handleAdd = (count) => {
    //     console.log  (`se agregaron ${count} productos`)
    //     const objProd={ 
    //         id, name, price, quantity
    //     }
    //     setQuantity(count)
    //     setCart([...cart,objProd])

    // }



    // const Count = typeInput ? ItemCount : InputCount

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    Descripción: {description}
                </p>
                <p className="Info">
                    Precio: {price}
                </p>
            </section>           
            <footer className='ItemFooter'>
                {quantity > 0 ? <Link to='/cart'>Ir al carrito</Link> : <ItemCount onAdd={handleAdd} stock={stock}/> } 
            </footer>
        </article>
    )
}

export default ItemDetail