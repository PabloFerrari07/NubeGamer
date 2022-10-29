import { useContext } from 'react';
import {Link} from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import Checkout from '../Checkout/Checkout';
import ItemCart from '../ItemCart/ItemCart';
import './Cart.css'




const Cart = ()=>{
    const {cart,  totalPrice} =useContext(CartContext);
    if(cart.length === 0){
        return(
            <div>
                 <Link to={'/'}>Hacer compras</Link>
            </div>
        )
    }

    return(
        <div>
        {
            cart.map(product => <ItemCart key={product.id} product={product}/>)
        }
        {/* <Checkout/> */}
        <p className='p_cart'>
            total:${ totalPrice()}</p>
        <Link to={`/chekout`} className="boton_nav">finish</Link>


        </div>
    )

}

export default Cart