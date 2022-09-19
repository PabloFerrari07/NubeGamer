import './Navbar.css'
import Cartwidget from "../Cartwidget/Cartwidget"

const Navbar = ()=>{
    return(

        <nav class="nav_all">
            <div class="Logo">
            <p>NUBE<span>GAMER</span></p>
            </div>
            <div class="lista_navegacion">
                <button class="boton_nav">Computadoras</button>
                <button class="boton_nav">Perifericos</button>
                <button class="boton_nav">joysticks</button>
            <div>
                <Cartwidget/>
            </div>
            </div>
        </nav>


    )
}

export default Navbar