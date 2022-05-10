import {useState} from 'react'
import './ItemCount.css';

const ItemCount= ({ onAdd, stock=0 ,initial = 0 }) => {
    const [count, setCount] = useState(initial)

    const increment = () => {
        if (count < stock){
            setCount(count + 1)

    }
}

    const decrement = () => {
        if (count > 0){
            setCount(count - 1)

    }
}

    if (stock === 0){
        return <button className='option' disabled> No hay stock </button>
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