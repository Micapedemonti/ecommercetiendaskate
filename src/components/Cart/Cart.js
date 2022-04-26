import { useContext } from "react"
import CartContext from "../context/CartContext";
import { Link } from "react-router-dom";



   export const Cart = () => {

    const { cart, removeItem, total, clear } = useContext(CartContext)


    return (
        <>
          <main className="containerCart">
            <h2>Artículos</h2>
            <div className="animate_animated animate_fadeIn cart">
              {cart.length === 0 ? (
                <div className="cart__empty">
                  <p>No hay productos en el carrito</p>
    
                  <Link className="cart__link" to="/">
                    <i className="fas fa-arrow-alt-left"></i>Volver a Inicio
                  </Link>
                </div>
              ) : (
                cart.map((prod) => (
                  <div key={prod.id} className="cart__products">
                    <div>
                      <img
                        className="cart__img"
                        src={prod.img}
                        alt={prod.name}
                      />
                    </div>
    
                    <div>
                      <p className="cart__name">{prod.name}</p>
    
                      <div className="cart__quantity">
                        <p>Cantidad: {prod.quantity}</p>
                      </div>
                      <p className="cart__price">
                         <span>{prod.price}</span>
                      </p>
                      <p className="cart__subtotal">
                        Subtotal: 
                        <span>{prod.Price * parseInt(prod.quantity)}</span>
                      </p>
                    </div>
                    <button
                      className="cart__btnDelete"
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
                  <h3>Resúmen del Pedido</h3>
    
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
                  <button className="resume__btn" type="submit" >
                   Terminar compra
                  </button>
                </div>
              </div>
            ) : null}
          </main>
        </>
      );
    };


export default Cart