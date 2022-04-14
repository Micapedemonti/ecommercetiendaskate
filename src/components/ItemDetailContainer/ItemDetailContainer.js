import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { getProductsById } from "../../asyncmock"
import {useParams} from 'react-router-dom'

const ItemDetailContainer =(props)=>{ 
    const [product, setProduct] = useState([])
    
    const {productId}=useParams()

    useEffect(()=> {
        getProductsById().then(prods =>{
            setProduct(prods)
        }).catch(error=>{
            console.log(error)
        })
    }, [])

return(
     <div>
           <h1>{props.greeting}</h1>
         <ItemDetail{...product}/>
     </div>
 )
}
 
 export default ItemDetailContainer