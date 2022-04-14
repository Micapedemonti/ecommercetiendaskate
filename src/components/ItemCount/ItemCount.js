import {useState} from 'react'
import './ItemCount.css';

const ItemCount=({initial, stock, onAdd})=>{
   const [count, setCount]= useState(1)

const decrement =()=>{
    if (count > initial){
    setCount(count -1)
}}
const increment =()=>{
    if(count < stock){
    setCount(count +1)
}}

return (
    <div className= 'carrito'>
        <h3>Carrito de compras</h3>
     <div className='contador'>   
        <button onClick = {decrement}> - </button>
        <p>{count}</p>
        <button onClick = {increment}> + </button>
    </div>
    <div className='agregaCarrito'>
    <button onClick = {() => onAdd(count)}>Agregar al carrito</button>
    </div>
    </div>
)
}

export default ItemCount
