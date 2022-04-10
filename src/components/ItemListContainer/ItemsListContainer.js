import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { getProducts } from "../../asyncmock"
import "./ItemListContainer.css"

const ItemListContainer=(props)=>{ 
  const [products, setProducts] = useState([])

    useEffect(()=> {
        getProducts().then(prods =>{
            setProducts(prods)
        }).catch(error=>{
            console.log(error)
        })
    }, [])

     return(
       <div>
        <h1>{props.greeting}</h1>
        <div className='containerProductos'>
        <ItemList products={products}/>
        </div>
        </div>
    )
}

export default ItemListContainer