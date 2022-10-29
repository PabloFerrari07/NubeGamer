import carrito from './assets/carrito.svg'
import './cartwidget.css'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const Cartwidget = () =>{

    const {totalQuantity} = useContext(CartContext)
    // console.log(totalQuantity)
    return(
        <div>
            
            
        <div className="carrito_contenedor">

            <Link to={`/cart`}>
            {totalQuantity}
            {/* <img src={carrito} alt="carrito" className="img_carrito"/> */}
            </Link>
        </div>
    
            
            </div>


    )
}

export default Cartwidget