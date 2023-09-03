'use client'
import {useState} from "react";

export default function Count() {
    // var count = 0;
    const [count, setCount] = useState(0)
    const increamentHandler = ()=>{
        // count = count + 1
        setCount(count + 1)
        console.log("count",count);
    }
    const decreamentHandler = ()=>{
        // count = count - 1
        if (count > 0) {
          setCount(count - 1)
        }
       
        
    }

    const resetHandler = ()=>{
      setCount(0);
    }
  return (
    <>
    <button onClick={decreamentHandler}>-</button>
    <span>{count}</span>
    <button onClick={increamentHandler}>+</button>

    {count != 0 && <button onClick={()=>  setCount(0)}>Reset</button>}
    </>
  )
}
