import { useState, useEffect } from "react"
import ItemDetail from "../Detalles/ItemDetail"
import { getProductsById } from "../../asyncmock"
import {useParams} from 'react-router-dom'


const ItemDetailContainer =(setCart,cart)=>{ 
    const [product, setProduct] = useState([])
    const[loading, setLoading]=useState(true)

    const {productId}=useParams()

    useEffect(()=> {
        getProductsById(productId).then(prods =>{
            setProduct(prods)
        }).catch(error=>{
            console.log(error)
        }).finally(()=> {
            setLoading(false)
        })
        return(()=>{
            setProduct()
        })
    },[])    

return(
     <div>
         {
             loading ?
             <h1>cargando...</h1>:
             product ?
             <ItemDetail{...product} setCart={setCart}cart={cart}/>:
         <h1>El producto no existe</h1>

  }

 </div>
         
)
}
 
 export default ItemDetailContainer