import { cartContext } from "./cartContext";
import { useState } from "react"; 

function CartProvider ({children}) {
    const [cart, setCart] = useState ([]);
    const addCart = (prod) => setCart ([... cart, prod]);
    const clearCart = () => setCart ([]);
    const remove = (itemId) => {setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));};

    return (
        <cartContext.Provider value = {{cart, addCart, clearCart, remove}}>
            {children}
        </cartContext.Provider>
    )
}
export default CartProvider;