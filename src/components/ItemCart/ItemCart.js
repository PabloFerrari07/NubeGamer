import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./ItemCart.css"

const ItemCart = ({product}) => {

    const{removeItem} =useContext(CartContext)

    return (
        <div className="cart_container">
            <img src={product.image} />
            <p>nombre del producto: {product.name}</p>
            <p>precio: {product.price}</p>
            <p>cantidad: {product.quantity}</p>
            <p>subtotal:  ${product.quantity * product.price}</p>
            <button onClick={()=>{removeItem(product.id)}}>Eliminar</button>
        </div>
    )


}


export default ItemCart;