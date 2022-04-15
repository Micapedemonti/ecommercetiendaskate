import { useState, useEffect } from "react"
import ItemDetail from "../Detalles/ItemDetail"
import { getProductsById } from "../../asyncmock"
import {useParams} from 'react-router-dom'
import ItemCount from "../ItemCount/ItemCount"


const ItemDetailContainer =(props)=>{ 
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
    const handleOnAdd =(quantity)=> {
        console.log ('se agregaron ${quantity} productos')
      };
return(
     <div>
         {
             loading ?
             <h1>cargando...</h1>:
             product ?
         <ItemDetail{...product}/>:
         <h1>El producto no existe</h1>  
         }
                 <div>

         <ItemCount initial= {0} stock ={10} onAdd={handleOnAdd}/> 
 </div>
 </div>
         
)
}
 
 export default ItemDetailContainer