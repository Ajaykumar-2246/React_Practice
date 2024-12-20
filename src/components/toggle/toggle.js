import { useState } from "react";

function Toggle() {
  let [display, setdisplay] = useState(true);
  let displayText=()=>{
    setdisplay(!display);
  }
  return (
    <div className="App">
      <button onClick={displayText}>
      {!display ? "hide text" : "show text"}
      </button>
    </div>
  );
}

export default Toggle;
