import React, {useState} from 'react'
import '../App.css';

function Counter(){
    const [count, setCount] = useState(0);;

    return(
      <div className="counter">
        <h1 className="count-display">{count}</h1>
          <div className="buttons">
            <button class="pill" type="button" onClick={()=>{setCount(count-1)}}>Decrement</button>
            <button class="pill" type="button" onClick={()=>{setCount(count+1)}}>Increment</button>
            <button class="pill" type="button" onClick={()=>{setCount(0)}}>Reset</button>
          </div>  
      </div>
    );
}

export default Counter;