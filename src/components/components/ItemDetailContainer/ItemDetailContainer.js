import {useState, useEffect } from "react"
import { getProductsById } from "../../../asyncmock"
import ItemDetail from "../../ItemDetail/ItemDetail"
import { useParams } from 'react-router-dom';


const ItemDetailContainer=()=>{ 
    const [product, setProduct]=useState()

    const {productId} = useParams()
  
      useEffect(()=> {
          getProductsById(productId).then(item =>{
              setProduct(item)
          }).catch(error=>{
              console.log(error)
          })
      },[])

      return(()=>{
          setProduct()
    })
},[productId])

return (
    <div>
        {
            loading ?
                <h1>Cargando detalle...</h1> :
            product ?
                <ItemDetail {...product} /> :
                <h1>El producto no existe</h1>
        }

    </div>
)
 

    export default ItemDetailContainer



