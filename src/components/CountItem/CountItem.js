import { useState} from 'react';

import './Count.css';

const Countitem = ({onAdd})=>{

    const [count, setcount] = useState(0);


    const increment = () =>{
        if(count < 20){
            setcount( count + 1 );
        
        }
    };

    const decrement = ()=>{
        if(count > 0){
            setcount(count -1);
        }
    };

    

    return(
        <div className='divCount'>
            <p >{count}</p>
 
            <button onClick={increment}  className="buttons_count">+</button>
 
            <div>
            <button onClick={decrement} className="buttons_count">-</button>
            </div>

            <button onClick={()=>onAdd(count)} className="buttton_countAdd">Añadir al carrito</button>
        </div>

    )

};



export default Countitem;