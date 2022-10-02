import './Hero.css'
import joystick from './assets/joystick.png'

const Hero = ()=>{
    return(
        <div class="Hero_all">
        <div class="hero">
            <h1>Bienvenido al <span>juego</span></h1>
        </div>
        <div class="hero_img">
        <img src={joystick}/>

        </div>
        </div>

        
    )
}


export default Hero 