import './Hero.css'
import joystick from './assets/joystick.png'

const Hero = ()=>{
    return(
        <div className="Hero_all">
        <div className="hero">
            <h1>Bienvenido al <span>juego</span></h1>
        </div>
        <div className="hero_img">
        <img src={joystick}/>

        </div>
        </div>

        
    )
}


export default Hero 