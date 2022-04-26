import { createContext, useState,useEffect } from "react";

const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (productToAdd) => {
        setCart([...cart, productToAdd])
    }

    const getQuantity = () => {
        let count = 0
        cart.forEach(prod => {
            count += prod.quantity
        })

        return count
    }
    
    const isInCart = (id) => {
        return cart.some(prod => prod.id === id )
    }

    const clearCart = () => {
        setCart([])
    }

    const removeItem = (id) => {
        const products = cart.filter(prod => prod.id !== id)
        setCart(products)
    }
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const calculateTotal = cart.reduce(
          (total, prod) => total + prod.quantity * prod.Price,
          0
        );
    
        setTotal(calculateTotal);
      }, [cart]);

      const clear = () => {
        setCart([]);
      };
    

    return(
        <CartContext.Provider value={{
            cart,
            addItem,
            getQuantity,
            isInCart,
            clearCart,
            removeItem,
            total,
            clear
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext