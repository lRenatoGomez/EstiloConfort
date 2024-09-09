
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import './App.jsx';
import ItemListContainer from './components/ItemListContainer/index.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/index.jsx';


function App() {
  return (
    <BrowserRouter>
    <Navbar></Navbar>

    <Routes>
    <Route path='/' element={<ItemListContainer/>}></Route>
    <Route path='/category/:category' element={<ItemListContainer/>}></Route>
    <Route path='/category/:category/:id' element={<ItemDetailContainer/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
