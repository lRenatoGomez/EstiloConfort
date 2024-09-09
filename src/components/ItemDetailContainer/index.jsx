import productList from "../../products.json";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail";

const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = productList.find((product) => product.id === parseInt(id));
      resolve(product);
    }, 500);
  });
};

const ItemDetailContainer = () => {
  const [productId, setProductId] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getProductById(id).then((product) => {
      setProductId(product);
    });

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
