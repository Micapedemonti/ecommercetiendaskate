import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { getProductsById } from "../../asyncmock"

const ItemDetailContainer =(props)=>{ 
    const [product, setProduct] = useState([])

    useEffect(()=> {
        getProductsById(2).then(prods =>{
            setProduct(prods)
        }).catch(error=>{
            console.log(error)
        })
    }, [])

//     return(
//         <div>
//          {/* <h1>{props.greeting}</h1> */}
//          <div >
//          <cardItem products={product}/>
//          </div>
//          </div>
//      )
//  }

return(
     <div>
         <ItemDetail{...product}/>
     </div>
 )
}
 
 export default ItemDetailContainer