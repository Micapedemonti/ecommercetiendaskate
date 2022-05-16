import { useState, useEffect} from "react"
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"
import { useParams } from "react-router-dom"
import { getDocs, collection,query,where,limit } from "firebase/firestore"
import { firestoreDb } from "../../services/firebase"

const ItemListContainer=(props)=>{ 
  const [products, setProducts] = useState([])

  const {categoryId}=useParams()


    useEffect(()=> {
        const collectionRef = categoryId 
        ? query(collection(firestoreDb, 'products'), where('category', '==', categoryId), where('category', '==', categoryId),limit (3))
        : query(collection(firestoreDb, 'products'))

    getDocs(collectionRef).then(response => {
        console.log(response)
        const products = response.docs.map(doc => {
            return { id: doc.id, ...doc.data()}
        })
        setProducts(products)
    })
    },[categoryId])

     return(
       <div className="main">
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
        <h1 className="titleContainer">PRODUCTOS DESTACADOS</h1>
        <ItemList products={products}/>
        </div>
        </div>
    )
}

export default ItemListContainer