import './ItemDetail.css'
import Countitem from '../CountItem/CountItem'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
const ItemDetail = ({id, name, price, category, image, description, stock})=>{

    
    const [add, setAdd] = useState(0)
    
    const {addItem} = useContext(CartContext);
    const onAdd =(quantity)=>{
        setAdd(quantity)
    
    
        const productToAdd = { id,name,price,stock}
    
        addItem(productToAdd)
 
    }
    



    return(
    <div className="card_detail">
    <div className="img_detail">
        <img src={image}/>
    </div>
    <div className="texto_info">
    <h1>Detalle del item</h1>

        <p> {name}</p>
        <p> {price}</p>
        <p> {description}</p>
        
        {
            add === 0 ? (
                <Countitem onAdd={onAdd} stock= {stock}/>
            ):(
                <Link to={`/cart`}>ENVIAR</Link>
            )
        }


    </div>
</div>
    )
}

export default ItemDetail

