import {useContext, useState} from "react";
import { cartContext } from "../../context/cartContext";
import { createOrder } from "../../firebase/db";
import { serverTimestamp } from "firebase/firestore";
import ModalOrder from "../ModalOrder";


const Checkout = () => {
    const { cart, clearCart } = useContext(cartContext);
    const [modalOpen, setModalOpen] = useState(false);
    const [orderId, setOrderId] = useState(null);
    const total = cart.reduce((acc, item) => acc + item.price * item.count, 0);

    const handleSubmit = async (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const phone = e.target.phone.value
        const email = e.target.email.value

        const order = {
            buyer: {name, phone, email},
            items: cart,
            date: serverTimestamp(),
            total: total,
        }
        const id = await createOrder(order);
        setOrderId(id);
        clearCart();
        setModalOpen(true);
    }

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Datos para la Compra</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Nombre Completo
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Ingresa tu nombre y apellido"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                Numero de Contacto
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone"
                type="text"
                placeholder="Ingresa tu numero de telefono o celular"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Correo electronico
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Ingresa tu dirección de envío"
              />
            </div>
            <button
              className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit">
              Realizar Pedido
            </button>
          </form>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Resumen de Compra</h2>
          <div className="mb-4">
            {cart.map((item, id) => (
                <div key={id} className="flex justify-between">
                <span className="text-gray-700">{item.name} x{item.count}</span>
                <span className="text-gray-700">${item.price * item.count}</span>
                </div>
            ))}
          </div>
          <hr className="my-4" />
          <hr className="my-4" />
          <div className="flex justify-between">
            <span className="font-bold text-xl">Total</span>
            <span className="font-bold text-xl">${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
      {modalOpen && <ModalOrder modalOpen={modalOpen} setModalOpen={setModalOpen} idOrder={orderId} />}
    </div>
  );
};
export default Checkout;
