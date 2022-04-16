import { useState, useEffect } from "react"
import ItemDetail from "../Detalles/ItemDetail"
import { getProductsById } from "../../asyncmock"
import {useParams} from 'react-router-dom'
import './Tablas.css'




const Tablas =(props)=>{ 
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
     <div className="containerTablas">
         {
             loading ?
             <h1>cargando...</h1>:
             product ?
         <ItemDetail{...product}/>:
         <h1>El producto no existe</h1>  


         }
                 <div>

         
 </div>
 </div>
         
)
}
 
 export default Tablas