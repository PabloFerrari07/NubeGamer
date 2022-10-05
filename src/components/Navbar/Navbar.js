import './Navbar.css'
import Cartwidget from "../Cartwidget/Cartwidget"
import { Link } from 'react-router-dom'


const Navbar = ()=>{
    return(

        <nav className="nav_all">
            <div className="Logo">
            <Link to={`/`}>NUBE<span>GAMER</span></Link>
            </div>
            <div className="lista_navegacion">
                <Link to={`/category/teclados`} className="boton_nav">teclado</Link>
                <Link to={`/category/mouse`} className="boton_nav">mouse</Link>
                <Link to={`/category/joystick`} className="boton_nav">joysticks</Link>
            </div>
            <div className='cartwid'>
                <Cartwidget/>
            </div>
        </nav>


    )
}

export default Navbar