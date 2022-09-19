import './Navbar.css'
import Cartwidget from "../Cartwidget/Cartwidget"

const Navbar = ()=>{
    return(

        <nav class="nav_all">
            <div class="Logo">
            <p>Nube<span>Gamer</span></p>
            </div>
            <div class="lista_navegacion">
                <button>Computadoras</button>
                <button>Perifericos</button>
                <button>Controles</button>
            <div>
                <Cartwidget/>
            </div>
            </div>
        </nav>


    )
}

export default Navbar