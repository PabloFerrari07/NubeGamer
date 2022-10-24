import { createContext, useState, useEffect} from "react";

export const CartContext = createContext();

export const CartContextProvider = ({children})=>{
        const [cart,setCart] = useState([])
        const [totalQuantity, setQuantity] = useState(0)

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
        
        useEffect(()=>{
            const totalQuantity = getTotalQuantity()
            setQuantity(totalQuantity)
        }, [cart])

        const getTotalQuantity = ()=>{
            let valtotalQuantity = 0
            cart.forEach(prod => {
                valtotalQuantity += prod.quantity
    

            })
            return valtotalQuantity;
        }

        
        
        const removeItem = (id)=>{
            const cartWItem = cart.filter(prod => prod.id !== id);
            setCart(cartWItem)
        }
        


        return(
            <CartContext.Provider value={{ cart,addItem,removeItem,totalQuantity }}>
                {children}
            </CartContext.Provider>

        )

}