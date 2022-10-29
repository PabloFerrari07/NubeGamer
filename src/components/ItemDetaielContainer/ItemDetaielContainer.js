import { useEffect,useState } from "react"
// import { getProduct } from "../../AsynkMonk"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail" 
import {getDoc, doc} from 'firebase/firestore'
import { db } from "../../services/firebase"



const ItemDetaielContainer = ()=>{

    const [product, setProduct] = useState([])

    const {productId} = useParams()


    useEffect(()=>{

        const docRef = doc(db,'products',productId)

        getDoc(docRef).then(doc =>{
            const data = doc.data()

            const productAdapted = {id: doc.id, ...data}

            setProduct(productAdapted)
        })
        // getProduct(productId).then(product =>{
        //     setProduct(product)
        // })
    },[])

    return(
        <ItemDetail {...product}/>
    )
}

export default ItemDetaielContainer