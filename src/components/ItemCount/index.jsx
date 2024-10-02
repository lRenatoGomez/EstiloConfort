
import { useState } from "react";
import { useCartContext } from "../../context/cartContext";
import { useNavigate } from "react-router-dom";

const ItemCount = ({ detail }) => {
  const [quantity, setQuantity] = useState(1);
  const { addCart } = useCartContext();
  const navigate = useNavigate();

  const increment = () => {
    if (quantity < 15) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    addCart({ ...detail, count: quantity });
    navigate("/");
  };

  return (
    <>
      <div className="flex gap-12 mt-12">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 p-0.5"
          viewBox="0 0 24 24"
          onClick={decrement}
        >
          <g data-name="52.Remove">
            <path d="M12 24a12 12 0 1 1 12-12 12.013 12.013 0 0 1-12 12zm0-22a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2z" />
            <path d="M6 11h12v2H6z" />
          </g>
        </svg>
        <h4>{quantity}</h4>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 p-0.5"
          viewBox="0 0 24 24"
          onClick={increment}
        >
          <g data-name="51.Add">
            <path d="M12 24a12 12 0 1 1 12-12 12.013 12.013 0 0 1-12 12zm0-22a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2z" />
            <path d="M11 6h2v12h-2z" />
            <path d="M6 11h12v2H6z" />
          </g>
        </svg>
      </div>

      <div className="flex justify-end md:justify-start">
        <button
          className="bg-black text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={handleAddToCart}>
          Agregar al carrito
        </button>
      </div>
    </>
  );
};
export default ItemCount;