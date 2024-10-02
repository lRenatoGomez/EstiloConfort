import cartImg from '../../assets/shopping-cart-icon-vector-illustration-260nw-220763071.jpg';
import { useCartContext } from '../../context/cartContext';

export const CartWidget = () =>{
    const {cart} = useCartContext();

    return(
        <div className="relative inline-block">
            <img src= {cartImg} className="w-16 h-16"/>
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-1">{cart.length}</span>
        </div>
    );
}


