import { useEffect,useState } from "react"
import { getProduct } from "../../AsynkMonk"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail" 




const ItemDetaielContainer = ()=>{

    const [product, setProduct] = useState([])

    const {productId} = useParams()


    useEffect(()=>{
        getProduct(productId).then(product =>{
            setProduct(product)
        })
    },[])

    return(
        <ItemDetail {...product}/>
    )
}

export default ItemDetaielContainer