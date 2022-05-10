import './Cart.css'
import { useContext, useState } from "react"
import CartContext from "../context/CartContext";
import { Link } from "react-router-dom";
import { getDocs, writeBatch,query,where,collection, documentId, addDoc } from "firebase/firestore";
import { firestoreDb} from '../../services/firebase/index';



   export const Cart = () => {

    const[loading, setLoading]=useState(false)

    const { cart, removeItem, total, clear} = useContext(CartContext)
   
    const generarOrden =()=>{
        setLoading(true)
      const objOrder ={
        items: cart,
        buyer:{
            name:'Micaela Pedemonti',
            phone:'345465',
            email: 'micaela12@gmail.com'
        },
       total: total,
        date: new Date()
      }
    
     console.log(generarOrden)
    
    const ids= cart.map (prod => prod.id)

    const batch= writeBatch(firestoreDb)

    const collectionRef= collection (firestoreDb, 'products')

    const fueraDeStock =[]

      getDocs(query(collectionRef, where(documentId(), 'in', ids)))
         .then(response =>{
           response.docs.forEach(doc =>{
             const dataDoc = doc.data ()
             const prodQuantity = cart.find(prod => prod.id=== doc.id)?.quantity

             if(dataDoc.stock >= prodQuantity){
               batch.update(doc.ref, {stock:dataDoc.stock - prodQuantity})
             } else {
               fueraDeStock.push ({ id: doc.id, ...dataDoc})
             }

           })
         }). then (()=>{
            if (fueraDeStock.length === 0){
               const collectionRef = collection(firestoreDb, 'ordenes')
              return addDoc(collectionRef, objOrder)
            } else {
                return Promise.reject({name:'fuera de stock', products :fueraDeStock})
            }
         }).then (({id})=>{
            batch.commit()
            console.log( `el id de la orden es ${id}`)
         }).catch(error =>{
           console.log (error)
         }).finally (()=> {
           setLoading(false)
         })
    }
        if (loading){
          return <h1>Se esta generando su orden </h1>
          
        }
    
    return (
        <>
          <main className="containerCart">
            <h2>Artículos</h2>
            <div className="">
              {cart.length === 0 ? (
                <div className="cart__empty">
                  <p>No hay productos en el carrito</p>
    
                  <Link className="cart__link" to="/">
                    <i className="fas fa-arrow-alt-left"></i>Volver a Inicio
                  </Link>
                </div>
              ) : (
                cart.map((prod) => (
                  <div key={prod.id} className="cartProducts">
    
                    <div className='productsContainer'>
                      <p className="cart__name">{prod.name}</p>
    
                      <div className="cart__quantity">
                        <p>Cantidad: {prod.quantity}</p>
                      </div>
                      <p className="cart__price">
                         <span>{prod.Price}</span>
                      </p>
                      <p className="cart__subtotal">
                        Subtotal: 
                        <span>{prod.Price * parseInt(prod.quantity)}</span>
                      </p>
                    </div>
                    <button
                      className="btnEliminar"
                      type="button"
                      onClick={() => removeItem(prod.id)}
                    >
                      X
                    </button>
                  </div>
                ))
              )}
            </div>
            {total > 0 ? (
              <div className="resume">
                <div className="resume__description">
                  <h2>Resúmen del Pedido</h2>
    
                  <>
                    <p className="cart__subtotal">
                      Total a pagar /
                      <span>{total}</span>
                    </p>
                  </>
                </div>
                <div className="resume__containerBtn">
                  <button className="resume__btn" type="submit" onClick={clear}>
                    Vaciar carrito
                  </button>
                </div>
                <div className="resume__containerBtn">
                <button onClick={() => generarOrden()} className="Button">Generar Orden</button>

                </div>
              </div>
            ) : null}
          </main>
        </>
      );
            }
          
          
          
export default Cart