import { createContext, useState, useEffect} from "react";

export const CartContext = createContext();

export const CartContextProvider = ({children})=>{
        const [cart,setCart] = useState([])
        const [totalQuantity, setTotalQuantity] = useState(0)

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

        
        
        const removeItem = (id)=>{
            const cartWItem = cart.filter(prod => prod.id !== id);
            setCart(cartWItem)
        }
        
        useEffect(()=>{
            const TotalQuantity = getTotalQuantity();
            setTotalQuantity(TotalQuantity);
        },[cart]);
        
        const getTotalQuantity = ()=>{
            let totalQuantity = 0;

            cart.forEach(prod =>{
                totalQuantity += prod.qty 
            })

            return totalQuantity
        };
        


        return(
            <CartContext.Provider value={{ cart,addItem,removeItem,totalQuantity }}>
                {children}
            </CartContext.Provider>

        )

}