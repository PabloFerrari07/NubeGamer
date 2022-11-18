import { addDoc,docs, collection, documentId, getDoc, getDocs, query, where, writeBatch } from "firebase/firestore"
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { db } from "../../services/firebase"
import './Checkout.css'

const Checkout = ()=>{
    const {cart, total } = useContext(CartContext)


    const [name,setName] = useState("")
    const [apellido,setApellido] = useState("")
    const [phone,setPhone] = useState("")
    const [email,setEmail] = useState("")

    const prevent = (e) => e.preventDefault();
    const order = async ()=>{
   
        try{

           const objOrder = {
            buyer:{
                name:name,
                email:email,
                phone:phone,
                apellido:apellido

            },    
            item: cart,
            total
           }  

           



           const ids = cart.map(prod => prod.id)
           const productsRef = collection(db,'products');

           const productsAddedFromFirestore = await getDocs(query(productsRef,where(documentId(),'in',ids)))
           const {docs } = productsAddedFromFirestore

           const batch = writeBatch(db);
           const outOfStock = [];

           docs.forEach(doc =>{
            const dataDoc = doc.data();
            const stockDb = dataDoc.stock;

            const productAdddedToCart = cart.find(prod=>prod.id === doc.id)
            const prodQuantity  = productAdddedToCart?.quantity

            if(stockDb >= prodQuantity){
                batch.update(doc.ref,{stock:stockDb - prodQuantity})
            }else{
                outOfStock.push({id: doc.id,...dataDoc})
            }
        })
        if(outOfStock.length === 0){
            await batch.commit()

            const orderRef = collection(db,'orders')
            const orderAdded = await addDoc(orderRef,objOrder)
            alert(`Gracias por tu compra! dentro de los proximos 3 dias habiles te llegara tu pedido el id es: ${orderAdded.id}`)
            console.log(`el id es: ${orderAdded.id}`)
        }else{
            console.log('no hay mas ')
        }
        }catch(error){
            console.log(error)
        }
    }
    return(
        <div>

            <h1 className="title_checkout">Te pedimos que ingreses los siguientes datos para terminar tu compra!</h1>
        <form onSubmit={prevent} className="form_Checkout">
            <input name="name" onChange={(e)=> setName(e.target.value)} placeholder="Nombre"/>
            <input name="name" onChange={(e)=> setApellido(e.target.value)} placeholder="apellido"/>
            <input name="name" onChange={(e)=> setEmail(e.target.value)} placeholder="email"/>
            <input name="name" onChange={(e)=> setPhone(e.target.value)} placeholder="mensaje"/>
            <button onClick={order}>terminar</button>
        </form>
            
        </div>
    )
    
  
    


}

export default Checkout