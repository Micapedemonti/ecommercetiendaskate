import {useState} from 'react'
import './ItemCount.css';

const ItemCount= ({ onAdd, stock,initial = 0 }) => {
    const [count, setCount] = useState(initial)

    const increment = () => {

            setCount(count + 1)

    }

    const decrement = () => {
            setCount(count - 1)

    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button onClick={()=> onAdd (count)}>Agregar al carrito</button>
        </div>
    )
    }

export default ItemCount