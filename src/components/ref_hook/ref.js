import React, { useRef } from "react";
import "./ref.css";

function Refhook() {
  const count = useRef(0);
  const increment = () => {
    count.current = count.current + 1;
    return count.current;
  };

  return (
    <div className="ref">
      <h3>{count.current}</h3>
      <button type="submit" onClick={increment}>
        add(+)
      </button>
    </div>
  );
}

export default Refhook;
