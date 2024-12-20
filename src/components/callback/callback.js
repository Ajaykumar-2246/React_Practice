import React from "react";
import { useCallback, useState } from "react";
import Child from "./callback2";
import "./call back.css";


function Callback() {
  let [add, setAdd] = useState(0);
  let [count, setCount] = useState(0);

  let Addition = () => {
    setAdd(add + 1);
    console.log("i am added");
  };

  const incre = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <React.Fragment>
      <div className="callback">
        <h3>UseCallback</h3>
        <p className="dis">{add}</p>
        <button className="btn" type="submit" onClick={Addition}>
          Addition
        </button>
        <div className="count">
          <p className="dis">{count}</p>
          <Child incre={incre} count={count} />
          <button className="btn" type="submit" onClick={incre}>
            Increment
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Callback;
