import linkedin from './assets/linkedin.svg'
import github from './assets/github.svg'
import './Footer.css'

const Footer = ()=>{
    return(


        <div className='footer_all'>
            <div className='footer_contact'>
                <div className="contacto">
                <h3>contacto</h3>
                </div>
                <div className="contacto_img">
                    <a href='https://www.linkedin.com/in/pablo-ferrari-895527235/'>
                        
                    <img src={linkedin}/>
                    </a>
                    <a href='https://github.com/PabloFerrari07/NubeGamer'>
                        
                    <img src={github}/>
                        </a>
                </div>
            </div>
        </div>


    )
};

export default Footer;