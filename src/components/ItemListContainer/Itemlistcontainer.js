import './Itemlistcontainer.css';

import { getProducts } from '../../AsynkMonk';
import { useEffect,useState } from 'react';
import {  useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';



const ItemListContainer = () =>{

    const {categoryId} = useParams()

    const [product,setProduct] = useState([])

    useEffect(()=>{
        getProducts(categoryId).then(res =>{
            setProduct(res)
        })
    },[categoryId])

    console.log(categoryId)

    return(
        <div>
    <div className="titulo" > 
       <h2>Nuestros productos</h2>
    </div>

    <ItemList products={product}/>

        </div>
    )
}

export default ItemListContainer