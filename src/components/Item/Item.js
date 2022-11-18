import { Link } from 'react-router-dom';
import './Item.css'
const Item = ( {prod})=>{


    return(

        <div key={prod.id} className="card">
        <h3>{prod.name}</h3>
        <img src={prod.image}/>
       <div className='card_info'>
        <p>${prod.price}</p>
        <Link to={`/detail/${prod.id}`}>Ver detalle</Link>
       </div>

        </div>
  
    )
}

export default Item