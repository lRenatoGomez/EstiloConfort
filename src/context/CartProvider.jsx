import { cartContext } from "./cartContext";
import { useState } from "react"; 

function CartProvider ({children}) {
    const [cart, setCart] = useState ([]);
    const addCart = (prod) => setCart ([... cart, prod]);
    const clearCart = () => setCart ([]);

    return (
        <cartContext.Provider value = {{cart, addCart}}>
            {children}
        </cartContext.Provider>
    )
}
export default CartProvider;