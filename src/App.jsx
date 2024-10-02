
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './App.jsx';
import ItemListContainer from './components/ItemListContainer/index.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/index.jsx';
import CartContainer from './components/CartContainer';
import Checkout from './components/Checkout/index.jsx';


function App() {
  return (
    <BrowserRouter>
    <Navbar></Navbar>

    <Routes>
    <Route path='/' element={<ItemListContainer/>}></Route>
    <Route path='/category/:category' element={<ItemListContainer/>}></Route>
    <Route path='/product/:id' element={<ItemDetailContainer/>}></Route>
    <Route path= '/cart' element={<CartContainer/>}/>
    <Route path= '/checkout' element={<Checkout/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
