import { useState } from 'react';
import './Count.css'
const Countitem = ()=>{

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
            <p>{count}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>

    )

};


export default Countitem;