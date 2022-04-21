import { useState, useEffect } from "react"
import ItemDetail from "../Detalles/ItemDetail"
import { getProductsById } from "../../asyncmock"
import {useParams} from 'react-router-dom'
import ItemCount from "../ItemCount/ItemCount"
import ItemListContainer from "../ItemListContainer/ItemsListContainer"



const ItemDetailContainer =(setCart,cart)=>{ 
    const [product, setProduct] = useState([])
    const[loading, setLoading]=useState(true)

    const {productId}=useParams()
    // const handleOnAdd =(quantity)=> {
    //     //     console.log ('se agregaron ${quantity} productos')
    // }
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
    {/* <ItemCount initial= {0} stock ={10} onAdd={handleOnAdd}/>  */}
 </div>
         
)
}
 
 export default ItemDetailContainer 