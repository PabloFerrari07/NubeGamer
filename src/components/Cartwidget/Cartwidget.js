import carrito from './assets/carrito.svg'
import './cartwidget.css'
import Countitem from '../CountItem/CountItem'
const Cartwidget = () =>{
    return(

        <div class="carrito_contenedor">
            <img src={carrito} alt="carrito" class="img_carrito"/>
            
            <Countitem/>
        </div>


    )
}

export default Cartwidget