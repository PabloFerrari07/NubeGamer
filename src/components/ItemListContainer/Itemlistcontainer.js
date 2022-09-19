import './Itemlistcontainer.css';
import joystick from './assets/joystick.png'

const ItemListContainer = ({saludo}) =>{
    return(
    <div class="titulo" > 
        <h1>{saludo}</h1> 
        <img src={joystick} alt="joystick"/>
    </div>
    )
}

export default ItemListContainer