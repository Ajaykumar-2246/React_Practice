import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./counterone.css";
import { counterActions } from "../reduxtool/reducer";

const Counterone = () => {
  const count = useSelector((state) => state.count);
  const hide = useSelector((state) => state.hide);

  const dispatch = useDispatch();

  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  const toggle = () => {
    dispatch({ type: "toggle" });
  };

  return (
    <div className="Counterone">
        <h3>Redux Counter and Toggle</h3>
      {hide ? <h4>{count}</h4> : ""}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
};

export default Counterone;
