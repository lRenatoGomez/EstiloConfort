import { getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc} from "firebase/firestore";
import {app} from "./config";

const db = getFirestore(app);



export const getProducts = async (setProducts) => {
    const querySnapshot = await getDocs(collection(db, "products"));
    const products = [];
    querySnapshot.forEach((doc) => {
      products.push(doc.data())
    });

    setProducts(products);
}

export const getSingleProduct = async (id, setProduct) =>{
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      setProduct(docSnap.data());
      console.log(docSnap.data())
    } else {
      console.log("No such document!");
    }
}

export const getCategoryProduct = async (category, setProduct) =>{

const q = query(collection(db, "products"), where("category", "==", category));
const products = [];
const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
    products.push(doc.data())
});
    setProduct(products)
}

export const createOrder = async (order) => {
  try {
    const docRef = await addDoc(collection(db, "orders"), order);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }

}


