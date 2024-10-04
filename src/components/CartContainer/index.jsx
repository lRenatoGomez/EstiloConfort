import { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/cartContext";

const CartContainer = () => {
  const { cart, remove } = useContext(cartContext);

  const total = cart.reduce((acc, item) => acc + item.price * item.count, 0);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Carrito de Compras</h2>

        {cart.length === 0 ? (
          <div className="text-center">
            <p className="text-lg font-medium mb-4">Ups! Aún no hay nada aquí</p>
            <Link
              to="/"
              className="mt-6 w-full bg-black hover:bg-blue-600 text-white py-3 rounded-lg font-bold text-center block"
            >
              Volver a Productos
            </Link>
          </div>
        ) : (
          <>
            <ul className="space-y-4">
              {cart.map((item, index) => (
                <li key={index} className="flex justify-between items-center border-b pb-4">
                  <div className="flex items-center space-x-4">
                    <img 
                      src={item.imageUrl} 
                      alt={item.name} 
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div>
                      <h3 className="text-lg font-medium">{item.name}</h3>
                      <p className="text-gray-500">Cantidad: {item.count}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <p className="text-lg font-semibold">${item.price * item.count}</p>
                    <button
                      onClick={() => remove(item.id)}
                      className="text-black hover:text-red-500 font-bold text-xl"
                    >
                      X
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex justify-between text-lg font-bold">
              <p>Total:</p>
              <p>${total.toFixed(2)}</p>
            </div>
            <Link
              to='/checkout'
              className="mt-6 w-full bg-black hover:bg-blue-600 text-white py-3 rounded-lg font-bold text-center block">
              Finalizar Compra
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default CartContainer;





