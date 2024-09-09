import ItemList from '../ItemsList/ItemsList.jsx'
import {useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import productList from '../../products.json';


const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(productList);
      }, 500); 
    });
  };



function ItemListContainer () {

    const [product, setProducts] = useState([]);
    const {category} = useParams ();

    useEffect(() => {
        getProducts().then((response) => {
          const filteredProducts = category
            ? response.filter((product) => product.category === category)
            : response;
          setProducts(filteredProducts);
        });
      }, [category]);

    return(
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <ItemList products = {product}/>
    </div>
    )
}
export default ItemListContainer;

