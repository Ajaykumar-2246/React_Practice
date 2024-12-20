import {useState} from "react";

let Counter =()=> {
  let [countNumber,setCount]=useState(1);
  let increment=()=>{
    countNumber= countNumber+1;
    setCount(countNumber);
  }
  let decrement=()=>{
    countNumber= countNumber-1;
    setCount(countNumber);
  }
    return (
      <div className="Counter">
        <div className="countNumber">{countNumber}</div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>decrement</button>
      </div>
    );
  }
  
  export default Counter;