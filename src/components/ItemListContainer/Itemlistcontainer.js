import './Itemlistcontainer.css';
import Hero from '../Hero/Hero'
// import { getProducts } from '../../AsynkMonk';
import { useEffect,useState } from 'react';
import {  useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import {getDocs,collection, query,where} from 'firebase/firestore'

import { db } from '../../services/firebase';
import DayOffer from '../DayOffer/DayOffer';


const ItemListContainer = () =>{

    const [product,setProduct] = useState([])
    const {categoryId} = useParams()


    useEffect(()=>{

        const collectionRef = categoryId 
        ? query(collection(db,'products'),  where('category','==', categoryId))
        :collection(db,'products')
        getDocs(collectionRef).then(response =>{
       

            const productsAdapted = response.docs.map(doc =>{
                const data = doc.data()

                return{id: doc.id, ...data}
                console.log(data)
            })


            setProduct(productsAdapted)
        })
     
     
        // getProducts(categoryId).then(res =>{
        //     setProduct(res)
        })
    // },[categoryId])



    return(
        <div>
            <div className='Hero'>
                {!categoryId ? <Hero/> : null}
    {!categoryId ? <DayOffer/> : null}
       
            </div>
    <div className="titulo" > 
       <h2>Nuestros productos</h2>
    </div>
    <ItemList products={product}/> 

        </div>
    )
}

export default ItemListContainer