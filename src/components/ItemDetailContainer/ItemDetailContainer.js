import { useState, useEffect } from 'react'
import { getProductsById } from '../../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { firestoreDb } from '../../services/firebase'
import { getDoc, doc } from 'firebase/firestore'
import "./ItemDetailContainer.css"

const ItemDetailContainer = ({ setCart, cart }) => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(false)
    
    const { productId } = useParams()

    useEffect(() => {
  
        getDoc(doc(firestoreDb, 'products', productId)).then(response => {
            const product = { id: response.id, ...response.data()}
            setProduct(product)
        })

        return (() => {
            setProduct()
        })

    }, [productId])

    if(loading) {
        return(
            // <h1>Cargando...</h1> 
            <span class="iconify" data-icon="eos-icons:bubble-loading" data-width="40" data-height="40"></span>
        )
    }

    return (
        <div className="ItemDetailContainer" >
            { 
                product ? 
                    <ItemDetail  {...product} setCart={setCart} cart={cart}/> :
                    <p className='iconoCargando'>
                    <span class="iconify" data-icon="eos-icons:bubble-loading" data-width="40" data-height="40"></span>
                    </p>
            }
        </div>
    )    
}
export default ItemDetailContainer