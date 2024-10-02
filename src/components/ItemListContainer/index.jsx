import ItemList from '../ItemsList/ItemsList.jsx'
import {useState, useEffect} from "react";
import {useParams } from "react-router-dom";
import {getProducts, getCategoryProduct} from '../../firebase/db.js';


function ItemListContainer () {

    const [product, setProducts] = useState([]);
    const {category} = useParams ();

    useEffect(() => {
        if (category){
          getCategoryProduct(category,setProducts)
        }
        else{
          getProducts(setProducts);
        }
      }, [category]);

    return(
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <ItemList products = {product}/>
    </div>
    )
}
export default ItemListContainer;

