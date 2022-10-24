import { Link } from 'react-router-dom';
import './Item.css'
const Item = ( {prod})=>{


    return(

        <div key={prod.id} className="card">
        <h3>{prod.name}</h3>
        <p>{prod.price}</p>
        <img src={prod.image}/>

        <Link to={`/detail/${prod.id}`}>Ver detalle</Link>
        </div>
  
    )
}

export default Item