import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail";
import { getSingleProduct } from "../../firebase/db";

const ItemDetailContainer = () => {
  const [productId, setProductId] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getSingleProduct(id, setProductId);

  }, [id]);

  return (
    <div>
      {productId ? (
        <ItemDetail detail={productId} />
      ) : (
        <h2>CARGANDO PRODUCTO</h2>
      )};
    </div>
  );
};
export default ItemDetailContainer;
