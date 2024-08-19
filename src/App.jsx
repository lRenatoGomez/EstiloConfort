
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from	'./components/Navbar/Navbar'

function App() {
  return (
    <>
    <Navbar/>
    <ItemListContainer welcome={'Bienvenidos'} ad={'Nuestros productos pronto estaran en linea'}/>
    </>
  )
}

export default App
