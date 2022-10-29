import { createContext, useState, useEffect} from "react";
import carrito from './assets/carrito.svg';
import "./context.css"
export const CartContext = createContext();

export const CartContextProvider = ({children})=>{
        const [cart,setCart] = useState([])
        const [totalQuantity, setTotalQuantity] = useState(0)
        const [total, setTotal] = useState(0)
    
        


    console.log(cart)
        const addItem = (productToAdd)=>{
            if(!isInCart(productToAdd.id)){
                setCart([...cart,productToAdd])
            }else{
                console.log('algo mal')
            }
        }

        const isInCart = (id) =>{
            return cart.some(prod => prod.id === id)
        }

        const totalPrice = ()=>{ 

            let accu = 0;

            cart.forEach(prod =>{
                accu += prod.quantity * prod.price
            })

            return accu
           }

        const totalProducts = ()=>{
            cart.reduce((acumulador,productAct)=>acumulador+productAct.quantity,0)
        }   

 
        
        const removeItem = (id)=>{
            const cartWItem = cart.filter(prod => prod.id !== id);
            setCart(cartWItem)
        }
        
        useEffect(()=>{
            const TotalQuantity = getTotalQuantity();
            setTotalQuantity(TotalQuantity);
        },[cart]);

        useEffect(()=>{
            const total = totalPrice();
            setTotal(total);
        },[cart]);
        
        
        const getTotalQuantity = ()=>{
            let totalQuantity = 0;

            cart.forEach(prod =>{
                totalQuantity += prod.quantity 
            })

            if(totalQuantity === 0){
                return <div></div>
            }else{

                return <>
                <div className="div_quantity">

                 <img src={carrito} alt="carrito" className="img_carrito"/>
                 <p className="p_quantity">       
                {totalQuantity}
                 </p>
                </div>
               
                </>

                    
                 
            }

        };
        


        return(
            <CartContext.Provider value={{
                 cart,
                 addItem,
                 removeItem,
                 totalQuantity,
                 totalPrice,
                 total
                  }}>
                {children}
            </CartContext.Provider>

        )

}