import React, { useState, useEffect } from "react";
import './effect.css';

function Effect() {
  let [count, setCount] = useState(0);
  let increment = () => {
    count = count + 1;
    setCount(count);
  };
  let decrement = () => {
    count = count - 1;
    setCount(count);
  };

  useEffect(() => {
    console.log("hello");
  }, [count]);

  return (
    <div className="container">
        <h3>Count:{count}</h3>
        <button className="btn" onClick={increment}> add (+)</button>
        <button className="btn" onClick={decrement}>sub(-)</button>
    </div>
  );
}

export default Effect;
