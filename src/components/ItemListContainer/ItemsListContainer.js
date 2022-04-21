import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { getProducts, getProductsById } from "../../asyncmock"
import "./ItemListContainer.css"
import ItemCount from "../ItemCount/ItemCount"

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
        <div className='containerBanner'>
        <div className='banner'>
         <img className="fotoBanner"src='./images/surfskate.png'/>
         </div>
         <div className='Textobanner'>
         <h1>UFO SKATESHOP</h1>
        <h1>SINCE 2015</h1>
         </div>
         </div>
        <div className='containerProductos'>
        <h1>Productos destacados</h1>
        <ItemList products={products}/>
        </div>
        </div>
    )
}

export default ItemListContainer