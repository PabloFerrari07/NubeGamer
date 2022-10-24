import carrito from './assets/carrito.svg'
import './cartwidget.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const Cartwidget = () =>{

    const {totalQuantity} = useContext(CartContext)
    console.log(totalQuantity)
    return(

        <div className="carrito_contenedor">
            <img src={carrito} alt="carrito" className="img_carrito"/>
            {totalQuantity}
        </div>


    )
}

export default Cartwidget