import { useEffect,useState } from "react"
import './Itemdetail.css'
import { getProduct } from "../../AsynkMonk"
import { useParams } from "react-router-dom"



const ItemDetaielContainer = ()=>{

    const [product, setProduct] = useState([])

    const {productId} = useParams()


    useEffect(()=>{
        getProduct(productId).then(product =>{
            setProduct(product)
        })
    },[])

    
    console.log(product)
    return(
        <div className="card_detail">
            <div className="img_detail">
                <img src={product.image}/>
            </div>
            <div className="texto_info">
            <h1>Detalle del item</h1>

                <p> {product?.name}</p>
                <p> {product?.price}</p>
                <p> {product?.description}</p>
                <button>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemDetaielContainer