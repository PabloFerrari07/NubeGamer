import './ItemList.css'
import Item from '../Item/Item';
const ItemList = ({products})=>{
    return(
        <div className='flex_list'>
        {products.map(prod =>(

            <Item key={prod.id} prod={prod}/>
       
        ))}
    </div>
    )
}

export default ItemList