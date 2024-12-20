import React, { useState, useEffect ,useMemo} from "react";
import './memo_hook.css';

function Memo() {
  let [count, setCount] = useState(0);

  let factorial = useMemo(() => {
    let result = 5;
    for (let i = 1; i <= count; i++) {
      result=result*i;
    }
    return result;
  }, []);

  let increment = () => {
    setCount(count + 1);
  };

  let decrement = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    console.log("hello");
  }, [count]);

  return (
    <div className="container">
      <h3>Count:{count} <p className="dis">{factorial}</p></h3>
      <div>
        <button className="btn" onClick={increment}> add (+)</button>
        <button className="btn" onClick={decrement}>sub(-)</button>
      </div>
    </div>
  );
}

export default Memo;
