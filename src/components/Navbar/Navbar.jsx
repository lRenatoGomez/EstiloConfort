import CartWidget from "../CartWidget/CartWidget"
import banner from "../../assets/BANNER.jpg"

function Navbar () {
    return (
        <>
        <img className="banner" src={banner} alt="Banner"/>
        <nav className='navBar-container'>
            <h3 className="navBar-name">EstiloConfort</h3>
            <div className="navBar-item"> <button>Inicio</button></div>
            <div className="navBar-item"><button>Hombre</button></div>
            <div className="navBar-item"><button>Mujeres</button></div>
            <div className="navBar-item"><button>Niños</button></div>
            <CartWidget/>
        </nav>
        </>
    )
}

export default Navbar